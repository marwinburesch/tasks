const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");
// Placeholder

const tasks = [
  {
    title: "Get groceries",
    date: "Tomorrow",
    isDone: true,
  },
  {
    title: "Walk the dog",
    date: "Today",
    isDone: false,
  },
  {
    title: "Go to sleep",
    date: "Today",
    isDone: false,
  },
];

/*
Also valid in the .map:
function (task) {
  return createTaskListItem(task)
}
*/

const taskListItems = tasks.map((task) => createTaskListItem(task));

taskList.append(...taskListItems);

function createTaskListItem(task) {
  const taskListItem = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  taskListItem.className = "taskItem";

  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");
  input.checked = task.isDone;

  span.className = "taskItem__labelText";
  span.innerText = task.title;

  taskListItem.append(input, span);

  return taskListItem;
}
