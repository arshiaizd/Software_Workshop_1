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

function addTask(title, deadline = "") {
    const task = createTask(title, deadline);
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

window.TaskEngine = {
    TASK_STATUS,
    createTask,
    getTasks,
    setTasks,
    findTaskById,
    addTask,
    deleteTask,
    updateTask
};
