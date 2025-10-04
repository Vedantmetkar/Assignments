// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    // Add a new task to the list
    const addTask = () => {
        const taskText = taskInput.value.trim();

        // Ensure the input is not empty
        if (taskText !== '') {
            // Create a new list item (<li>) for the task
            const li = document.createElement('li');
            li.className = 'todo-item'; // Add a class for styling

            // Create a span to hold the task text
            const taskSpan = document.createElement('span');
            taskSpan.className = 'task-text';
            taskSpan.textContent = taskText;

            // Create a "Delete" button
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';

            // Add an event listener to the delete button
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li);
                sortList(); // Sort the list after removing an item
            });

            // Append the text and delete button to the list item
            li.appendChild(taskSpan);
            li.appendChild(deleteButton);

            // Add the new item to the list
            todoList.appendChild(li);

            // Clear the input field for the next task
            taskInput.value = '';

            // Sort the list after adding a new item
            sortList();
        }
    };

    // Sort the todo list alphabetically in ascending order
    const sortList = () => {
        const items = Array.from(todoList.children);
        
        // Sort the array of list items
        items.sort((a, b) => {
            const textA = a.querySelector('.task-text').textContent.toLowerCase();
            const textB = b.querySelector('.task-text').textContent.toLowerCase();
            if (textA < textB) return -1;
            if (textA > textB) return 1;
            return 0;
        });

        // Re-append the sorted items to the list
        items.forEach(item => todoList.appendChild(item));
    };

    // Event listener for the "Add" button click
    addButton.addEventListener('click', addTask);

    // Bonus: Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents default form submission behavior
            addTask();
        }
    });

    // Initial sort in case of pre-existing items (though none exist in this HTML)
    sortList();
});