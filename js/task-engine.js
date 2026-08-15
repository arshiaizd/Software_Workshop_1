const TASK_STATUS = {
    PENDING: "pending",
    COMPLETED: "completed"
};

const state = {
    tasks: []
};

function generateTaskId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createTask(title, deadline = "") {
    return {
        id: generateTaskId(),
        title: title.trim(),
        deadline,
        status: TASK_STATUS.PENDING,
        createdAt: new Date().toISOString()
    };
}

function getTasks() {
    return [...state.tasks];
}

function setTasks(tasks) {
    state.tasks = Array.isArray(tasks) ? [...tasks] : [];
}

function findTaskById(taskId) {
    return state.tasks.find((task) => task.id === taskId);
}

function saveTaskState() {
    if (!window.TaskStorage) {
        return false;
    }

    return window.TaskStorage.saveTasks(getTasks());
}

function restoreTaskState() {
    const storedTasks = window.TaskStorage
        ? window.TaskStorage.loadTasks()
        : [];

    setTasks(storedTasks);
    return getTasks();
}

function searchTasks(query) {
    const normalizedQuery = typeof query === "string"
        ? query.trim().toLowerCase()
        : "";

    if (!normalizedQuery) {
        return getTasks();
    }

    return state.tasks.filter((task) =>
        typeof task.title === "string"
        && task.title.toLowerCase().includes(normalizedQuery)
    );
}

function filterTasks(status = "all") {
    if (status === "all") {
        return getTasks();
    }

    if (status !== TASK_STATUS.PENDING && status !== TASK_STATUS.COMPLETED) {
        return [];
    }

    return state.tasks.filter((task) => task.status === status);
}

function sortTasksByDeadline(tasks) {
    if (!Array.isArray(tasks)) {
        return [];
    }

    return [...tasks].sort((firstTask, secondTask) => {
        const firstDeadline = Date.parse(firstTask.deadline);
        const secondDeadline = Date.parse(secondTask.deadline);
        const firstHasValidDeadline = !Number.isNaN(firstDeadline);
        const secondHasValidDeadline = !Number.isNaN(secondDeadline);

        if (firstHasValidDeadline && secondHasValidDeadline) {
            return firstDeadline - secondDeadline;
        }

        if (firstHasValidDeadline) {
            return -1;
        }

        if (secondHasValidDeadline) {
            return 1;
        }

        return 0;
    });
}

function validateTaskInput(title, deadline = "") {
    const normalizedTitle = typeof title === "string" ? title.trim() : "";
    const normalizedDeadline = typeof deadline === "string" ? deadline.trim() : "";
    const errors = [];

    if (!normalizedTitle) {
        errors.push("Task title is required.");
    } else if (normalizedTitle.length > 100) {
        errors.push("Task title must not exceed 100 characters.");
    }

    if (normalizedDeadline && Number.isNaN(Date.parse(normalizedDeadline))) {
        errors.push("Task deadline must be a valid date.");
    }

    return {
        isValid: errors.length === 0,
        errors,
        title: normalizedTitle,
        deadline: normalizedDeadline
    };
}

function addTask(title, deadline = "") {
    const validation = validateTaskInput(title, deadline);

    if (!validation.isValid) {
        throw new Error(validation.errors.join(" "));
    }

    const task = createTask(validation.title, validation.deadline);
    state.tasks.push(task);
    return task;
}

function deleteTask(taskId) {
    const taskIndex = state.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
        return false;
    }

    state.tasks.splice(taskIndex, 1);
    return true;
}

function updateTask(taskId, updates = {}) {
    const task = findTaskById(taskId);

    if (!task) {
        return null;
    }

    if (typeof updates.title === "string") {
        task.title = updates.title.trim();
    }

    if (typeof updates.deadline === "string") {
        task.deadline = updates.deadline;
    }

    return task;
}

function toggleTaskStatus(taskId) {
    const task = findTaskById(taskId);

    if (!task) {
        return null;
    }

    task.status = task.status === TASK_STATUS.COMPLETED
        ? TASK_STATUS.PENDING
        : TASK_STATUS.COMPLETED;

    return task;
}

window.TaskEngine = {
    TASK_STATUS,
    createTask,
    getTasks,
    setTasks,
    findTaskById,
    saveTaskState,
    restoreTaskState,
    searchTasks,
    filterTasks,
    sortTasksByDeadline,
    validateTaskInput,
    addTask,
    deleteTask,
    updateTask,
    toggleTaskStatus
};
