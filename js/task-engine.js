const TASK_STATUS = {
    PENDING: "pending",
    COMPLETED: "completed"
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

window.TaskEngine = {
    TASK_STATUS,
    createTask
};
