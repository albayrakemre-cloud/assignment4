// api.js
function fetchTasks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
                { id: 1, title: "Study JavaScript", completed: false },
                { id: 2, title: "Practice DOM", completed: true },
                { id: 3, title: "Read Async Patterns", completed: false }
            ];
            resolve(data);
            // (new Error("Failed to fetch"))
        }, 1500);
    });
}