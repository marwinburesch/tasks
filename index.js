const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");

const taskOne = createTaskListItem("Kaffee kochen");
const taskTwo = createTaskListItem("Javascript lernen");

taskList.append(taskOne, taskTwo);

function createTaskListItem(taskName) {
  const taskListItem = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  taskListItem.className = "taskItem";

  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");

  span.className = "taskItem__labelText";
  span.innerText = taskName;

  taskListItem.append(input, span);

  return taskListItem;
}
