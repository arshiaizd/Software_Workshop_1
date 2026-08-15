const TASKS_STORAGE_KEY = "study-task-planner.tasks";

function saveTasks(tasks) {
    if (!Array.isArray(tasks)) {
        return false;
    }

    try {
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
        return true;
    } catch (error) {
        return false;
    }
}

function loadTasks() {
    try {
        const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);

        if (storedTasks === null) {
            return [];
        }

        const parsedTasks = JSON.parse(storedTasks);
        return Array.isArray(parsedTasks) ? parsedTasks : [];
    } catch (error) {
        return [];
    }
}

window.TaskStorage = {
    saveTasks,
    loadTasks
};
