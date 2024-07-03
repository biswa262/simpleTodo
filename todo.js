const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

const addTask = () => {
  const taskText = taskInput.value;
  if (taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Add edit and delete buttons
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    // Add buttons to the list item
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = '';
  }
};

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Event delegation for handling button clicks on list items
taskList.addEventListener('click', (event) => {
  const clickedElement = event.target;

  // Edit button click
  if (clickedElement.classList.contains('edit-btn')) {
    const listItem = clickedElement.parentElement; // Get the list item element
    const currentText = listItem.textContent.trim(); // Get current text without leading/trailing spaces

    const newText = prompt("Enter new text:", currentText); // Pre-fill prompt with current text
    if (newText) {
      listItem.textContent = newText;
    }
  }

  // Delete button click (unchanged)
  if (clickedElement.classList.contains('delete-btn')) {
    taskList.removeChild(clickedElement.parentElement);
  }
});
