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

function calculateCompletionPercentage(statistics) {
    if (!statistics || statistics.total <= 0) {
        return 0;
    }

    const percentage = Math.round((statistics.completed / statistics.total) * 100);
    return Math.min(100, Math.max(0, percentage));
}

function updateCompletionProgress(statistics) {
    const percentage = calculateCompletionPercentage(statistics);
    const progress = document.getElementById("task-progress");

    if (progress) {
        progress.max = 100;
        progress.value = percentage;
        progress.textContent = `${percentage}%`;
    }

    setTextContent("progress-percentage", `${percentage}%`);
    return percentage;
}

function updateTaskStatistics(tasks = []) {
    const statistics = calculateTaskStatistics(tasks);

    setTextContent("stats-total", statistics.total);
    setTextContent("stats-pending", statistics.pending);
    setTextContent("stats-completed", statistics.completed);
    updateCompletionProgress(statistics);

    const emptyState = document.getElementById("empty-state");

    if (emptyState) {
        emptyState.hidden = statistics.total > 0;
    }

    return statistics;
}

window.TaskDashboard = {
    calculateTaskStatistics,
    calculateCompletionPercentage,
    updateCompletionProgress,
    updateTaskStatistics
};

document.addEventListener("DOMContentLoaded", () => {
    updateTaskStatistics([]);
});
