document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo_input");
  const todoButton = document.getElementById("add_task");
  const todoList = document.getElementById("todo_list");



  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  // adding task
  todoButton.addEventListener("click", () => {
    const taskValue = todoInput.value.trim();
    if (taskValue === "") return;
    const newTask = {
      id: Date.now(),
      task: taskValue,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    todoInput.value = "";
  });

  // managing locale storage
  function renderTask(task) {
    console.log(task);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
