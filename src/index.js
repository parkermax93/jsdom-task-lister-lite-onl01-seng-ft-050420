const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');
const taskInput = document.querySelector('#new-task-description');

document.addEventListener("DOMContentLoaded", loadEventListeners());

function loadEventListeners() { 
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
}

function addtask(t) {
  if(taskInput.value === '') { 
    alert('Add task content');
  } else { 
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
    taskInput.value = '';
  }
  t.preventDefault();
}