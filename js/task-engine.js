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

window.TaskEngine = {
    TASK_STATUS,
    createTask,
    getTasks,
    setTasks,
    findTaskById
};
