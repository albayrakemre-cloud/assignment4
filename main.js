// main.js
const loadTasksBtn = document.getElementById('loadTasksBtn');
const statusMessage = document.getElementById('statusMessage');
const taskList = document.getElementById('taskList');

const manager = new TaskManager();

loadTasksBtn.addEventListener('click', async () => {
    statusMessage.textContent = "Loading tasks...";
    statusMessage.className = "";
    taskList.innerHTML = ""; // clearing the list

    try {
        const rawData = await fetchTasks();

        //JSON Requirement step
        const jsonString = JSON.stringify(rawData);
        const parsedData = JSON.parse(jsonString);

        // Raw objects to Task class instance
        const taskInstances = parsedData.map(t => new Task(t.id, t.title, t.completed));

        manager.setTasks(taskInstances);
        renderTasks();

        statusMessage.textContent = ""; // deleting the message
    } catch (error) {
        statusMessage.textContent = "Error loading tasks.";
        statusMessage.className = "error";
    }
});

function renderTasks() {
    taskList.innerHTML = ""; // redrawe

    manager.tasks.forEach(task => {
        // we using DOM API
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${task.completed ? 'completed' : ''}`;

        const titleSpan = document.createElement('span');
        titleSpan.textContent = task.title;

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.completed ? "Undo" : "Complete";
        toggleBtn.addEventListener('click', () => {
            manager.toggleTask(task.id);
            renderTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', () => {
            manager.removeTask(task.id);
            renderTasks();
        });

        taskDiv.appendChild(titleSpan);
        taskDiv.appendChild(toggleBtn);
        taskDiv.appendChild(deleteBtn);

        taskList.appendChild(taskDiv);
    });
}