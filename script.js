document.addEventListener('DOMContentLoaded', function() {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // CREATE NEW <li> FOR THE TASK
        const li = document.createElement('li');
        li.textContent = taskText;

        // CREATE REMOVE BUTTON
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove button click event
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Add remove button to the li
        li.appendChild(removeBtn);

        // Add the li to the <ul> taskList
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach Event Listeners

    // 1. Button click adds task
    addButton.addEventListener('click', addTask);

    // 2. Pressing Enter key adds task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});