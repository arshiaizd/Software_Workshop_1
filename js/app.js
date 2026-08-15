document.addEventListener("DOMContentLoaded", () => {
    const engine = window.TaskEngine;
    const elements = {
        form: document.getElementById("task-form"),
        title: document.getElementById("task-title"),
        deadline: document.getElementById("task-deadline"),
        error: document.getElementById("form-error"),
        search: document.getElementById("task-search"),
        statusFilter: document.getElementById("status-filter"),
        deadlineSort: document.getElementById("deadline-sort"),
        taskList: document.getElementById("task-list"),
        emptyState: document.getElementById("empty-state"),
        taskTemplate: document.getElementById("task-card-template")
    };

    if (!engine || !elements.form || !elements.title || !elements.deadline
        || !elements.taskList || !elements.emptyState) {
        return;
    }

    function showError(message = "") {
        if (elements.error) {
            elements.error.textContent = message;
        }
    }

    function getVisibleTasks() {
        const query = elements.search ? elements.search.value : "";
        const status = elements.statusFilter ? elements.statusFilter.value : "all";
        let visibleTasks = engine.searchTasks(query);

        if (status !== "all") {
            const matchingIds = new Set(
                engine.filterTasks(status).map((task) => task.id)
            );
            visibleTasks = visibleTasks.filter((task) => matchingIds.has(task.id));
        }

        if (elements.deadlineSort && elements.deadlineSort.value === "deadline") {
            visibleTasks = engine.sortTasksByDeadline(visibleTasks);
        }

        return visibleTasks;
    }

    function createActionButton(label, action, taskId) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = label;
        button.dataset.action = action;
        button.dataset.taskId = taskId;
        return button;
    }

    function createTaskElement(task) {
        if (elements.taskTemplate) {
            const item = elements.taskTemplate.content.firstElementChild.cloneNode(true);
            const title = item.querySelector(".task-card__title");
            const deadline = item.querySelector("[data-task-deadline]");
            const status = item.querySelector("[data-task-status]");
            const isCompleted = task.status === engine.TASK_STATUS.COMPLETED;

            item.dataset.taskId = task.id;
            item.classList.toggle("task-card--pending", !isCompleted);
            item.classList.toggle("task-card--completed", isCompleted);
            title.textContent = task.title;
            deadline.textContent = task.deadline || "No deadline";
            status.textContent = isCompleted ? "Completed" : "Pending";

            item.querySelectorAll("button[data-action]").forEach((button) => {
                button.dataset.taskId = task.id;

                if (button.dataset.action === "toggle") {
                    button.textContent = isCompleted ? "Mark pending" : "Mark complete";
                }
            });

            return item;
        }

        const item = document.createElement("li");
        const title = document.createElement("h3");
        const details = document.createElement("p");
        const actions = document.createElement("div");
        const isCompleted = task.status === engine.TASK_STATUS.COMPLETED;

        item.dataset.taskId = task.id;
        title.textContent = task.title;
        details.textContent = `Deadline: ${task.deadline || "None"} | Status: ${task.status}`;

        actions.append(
            createActionButton(isCompleted ? "Mark pending" : "Complete", "toggle", task.id),
            createActionButton("Edit", "edit", task.id),
            createActionButton("Delete", "delete", task.id)
        );

        item.append(title, details, actions);
        return item;
    }

    function renderTasks() {
        const tasks = getVisibleTasks();
        elements.taskList.replaceChildren();
        elements.emptyState.hidden = tasks.length !== 0;

        tasks.forEach((task) => {
            elements.taskList.append(createTaskElement(task));
        });

        if (window.TaskDashboard) {
            window.TaskDashboard.updateTaskStatistics(engine.getTasks());
        }
    }

    function persistAndRender() {
        engine.saveTaskState();
        renderTasks();
    }

    function handleTaskSubmit(event) {
        event.preventDefault();

        try {
            engine.addTask(elements.title.value, elements.deadline.value);
            showError();
            elements.form.reset();
            persistAndRender();
        } catch (error) {
            showError(error instanceof Error ? error.message : "Unable to add task.");
        }
    }

    function editTask(taskId) {
        const task = engine.findTaskById(taskId);

        if (!task) {
            return;
        }

        const title = window.prompt("Edit task title:", task.title);

        if (title === null) {
            return;
        }

        const deadline = window.prompt(
            "Edit deadline (YYYY-MM-DD), or leave blank:",
            task.deadline || ""
        );

        if (deadline === null) {
            return;
        }

        const validation = engine.validateTaskInput(title, deadline);

        if (!validation.isValid) {
            showError(validation.errors.join(" "));
            return;
        }

        engine.updateTask(taskId, {
            title: validation.title,
            deadline: validation.deadline
        });
        showError();
        persistAndRender();
    }

    function handleTaskAction(event) {
        const button = event.target.closest("button[data-action]");

        if (!button || !elements.taskList.contains(button)) {
            return;
        }

        const { action, taskId } = button.dataset;

        if (action === "delete") {
            if (engine.deleteTask(taskId)) {
                persistAndRender();
            }
        } else if (action === "toggle") {
            if (engine.toggleTaskStatus(taskId)) {
                persistAndRender();
            }
        } else if (action === "edit") {
            editTask(taskId);
        }
    }

    elements.form.addEventListener("submit", handleTaskSubmit);
    elements.taskList.addEventListener("click", handleTaskAction);

    if (elements.search) {
        elements.search.addEventListener("input", renderTasks);
    }

    if (elements.statusFilter) {
        elements.statusFilter.addEventListener("change", renderTasks);
    }

    if (elements.deadlineSort) {
        elements.deadlineSort.addEventListener("change", renderTasks);
    }

    engine.restoreTaskState();
    renderTasks();
});
