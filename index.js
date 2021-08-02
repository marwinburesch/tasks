import {
  parseJSONFromLocalStorage,
  stringifyJSONToLocalStorage,
} from "./utils/localstorage.js";

const taskList = document.querySelector(".taskList");

const tasks = parseJSONFromLocalStorage("tasks", []);

const taskListItems = tasks.map((task) => createTaskListItem(task));

taskList.append(...taskListItems);

function completeTask(taskName, completed) {
  const tasks = parseJSONFromLocalStorage("tasks", []);
  const task = tasks.find((task) => task.title === taskName);
  task.isDone = completed;
  stringifyJSONToLocalStorage("tasks", tasks);
}

function createTaskListItem(task) {
  const taskListItem = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  taskListItem.className = "taskItem";

  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");
  input.checked = task.isDone;
  input.onclick = () => completeTask(task.title, input.checked);

  span.className = "taskItem__labelText";
  span.innerText = task.title;

  taskListItem.append(input, span);

  return taskListItem;
}
