const DASHBOARD_TASK_STATUS = {
    PENDING: "pending",
    COMPLETED: "completed"
};

const THEME_STORAGE_KEY = "study-task-planner.theme";

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

    return statistics;
}

function setTheme(theme) {
    const selectedTheme = theme === "dark" ? "dark" : "light";
    const toggle = document.getElementById("theme-toggle");

    document.documentElement.dataset.theme = selectedTheme;

    if (toggle) {
        const isDark = selectedTheme === "dark";
        toggle.setAttribute("aria-pressed", String(isDark));
        toggle.textContent = isDark ? "Switch to light theme" : "Switch to dark theme";
    }

    return selectedTheme;
}

function loadThemePreference() {
    try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
    } catch (error) {
        return "light";
    }
}

function saveThemePreference(theme) {
    if (theme !== "dark" && theme !== "light") {
        return false;
    }

    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        return true;
    } catch (error) {
        return false;
    }
}

function initializeThemeToggle() {
    const toggle = document.getElementById("theme-toggle");

    setTheme(loadThemePreference());

    if (!toggle) {
        return;
    }

    toggle.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark"
            ? "light"
            : "dark";
        const selectedTheme = setTheme(nextTheme);
        saveThemePreference(selectedTheme);
    });
}

window.TaskDashboard = {
    calculateTaskStatistics,
    calculateCompletionPercentage,
    updateCompletionProgress,
    updateTaskStatistics,
    setTheme,
    loadThemePreference,
    saveThemePreference
};

document.addEventListener("DOMContentLoaded", () => {
    initializeThemeToggle();
});
