const form = document.querySelector('#create-task-form');
const taskInput
const 

document.addEventListener("DOMContentLoaded", loadEventListeners());

function loadEventListeners() { 
  form.addEventListener('submit', addTask);
}

function addtask(t) {
  if(taskInput.value === '') { 
    alert('Add task content');
  } else { 
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
}