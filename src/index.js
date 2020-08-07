const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');
const taskInput = document.querySelector('#new-task-description');
const taskPriority = document.querySelector('#new-task-priority');
const filter = document.querySelector('#filter');

document.addEventListener("DOMContentLoaded", loadEventListeners());

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  filter.addEventListener('keyup', filterTasks);
}

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add task content');
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-task';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    switch(taskPriority.value.toLowerCase()) {
      case 'high':
        li.className = 'task-item red';
        taskList.insertBefore(li, taskList.querySelector('.yellow') || taskList.querySelector('.green'));
        break;
      case 'medium':
        li.className = 'task-item yellow';
        taskList.insertBefore(li, taskList.querySelector('.green'));
        break;
      case 'low':
        li.className = 'task-item green';
        taskList.appendChild(li);
        break;
      default:
        alert('Choose priority level');
    }

    li.addEventListener('click', editTask);

    taskInput.value = '';
    taskPriority.value = '';
  }
  e.preventDefault();
}

function editTask(e) {
  if(!e.target.classList.contains('delete-task')) {
    e.target.contentEditable = 'true';
  }
}

function removeTask(e) {
  if(e.target.classList.contains('delete-task')) {
    e.target.parentElement.remove();
  }
}

function filterTasks() {
  const text = filter.value.toLowerCase();

  document.querySelectorAll('.task-item').forEach(function(task) {
    const item = task.firstChild.textContent.toLowerCase()
    if(item.indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
}