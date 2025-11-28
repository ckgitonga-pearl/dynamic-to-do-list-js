document.addEventListener('DOMContentLoaded', function () {

    // ===== Select DOM Elements =====
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ===== Load tasks from Local Storage =====
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // ===== Helper: Create a single task element =====
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // Remove task
        removeBtn.onclick = function () {
            taskList.removeChild(li);

            // Remove from Local Storage
            tasks = tasks.filter(t => t !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // ===== Load saved tasks on page load =====
    function loadTasks() {
        tasks.forEach(task => createTaskElement(task));
    }

    loadTasks();

    // ===== Main function: Add new task =====
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Add to UI
        createTaskElement(taskText);

        // Save to Local Storage
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear input
        taskInput.value = "";
    }

    // ===== Event Listeners =====
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
