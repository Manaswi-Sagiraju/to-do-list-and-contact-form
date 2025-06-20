// Load tasks from localStorage on page load
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(taskText => renderTask(taskText));
};

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  renderTask(taskText);
  saveTaskToStorage(taskText);
  taskInput.value = '';

  setTimeout(() => {
    alert("✅ Task added to the list!");
  }, 100);
}

function renderTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button>`;
  document.getElementById('taskList').appendChild(li);
}

function removeTask(button) {
  const li = button.parentElement;
  const taskText = li.firstChild.textContent.trim();
  li.remove();
  removeTaskFromStorage(taskText);
}

function saveTaskToStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
