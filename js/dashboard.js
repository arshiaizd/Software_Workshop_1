const DASHBOARD_TASK_STATUS = {
    PENDING: "pending",
    COMPLETED: "completed"
};

function calculateTaskStatistics(tasks = []) {
    const safeTasks = Array.isArray(tasks) ? tasks : [];

    return {
        total: safeTasks.length,
        pending: safeTasks.filter((task) => task.status === DASHBOARD_TASK_STATUS.PENDING).length,
        completed: safeTasks.filter((task) => task.status === DASHBOARD_TASK_STATUS.COMPLETED).length
    };
}

function setTextContent(elementId, value) {
    const element = document.getElementById(elementId);

    if (element) {
        element.textContent = String(value);
    }
}

function updateTaskStatistics(tasks = []) {
    const statistics = calculateTaskStatistics(tasks);

    setTextContent("stats-total", statistics.total);
    setTextContent("stats-pending", statistics.pending);
    setTextContent("stats-completed", statistics.completed);

    const emptyState = document.getElementById("empty-state");

    if (emptyState) {
        emptyState.hidden = statistics.total > 0;
    }

    return statistics;
}

window.TaskDashboard = {
    calculateTaskStatistics,
    updateTaskStatistics
};

document.addEventListener("DOMContentLoaded", () => {
    updateTaskStatistics([]);
});
