import {
  parseJSONFromLocalStorage,
  stringifyJSONToLocalStorage,
} from "./utils/localstorage.js";

// Display sleceted date onclick, button not part of form
const altButton = document.querySelector(".addTask__alternativeButton");

altButton.onclick = alertSelectedDate;

function alertSelectedDate() {
  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );
  alert(checkedDateInput.value);
}

// Display sleceted date onsubmit, using submit button
const form = document.querySelector(".addTaskForm");

form.onsubmit = function (event) {
  // Prevent the default functionality of the submit event, which is reloading the page
  event.preventDefault();

  const newTask = { title: "", date: "", isDone: false };

  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );
  const textInput = document.querySelector(".addTaskForm__textInput");

  newTask.title = textInput.value;
  newTask.date = checkedDateInput.value;

  //Get oldTasks from localStorage with key "tasks"
  const oldTasks = parseJSONFromLocalStorage("tasks", []);

  //Add newTask to oldTasks
  const newTasks = [...oldTasks, newTask];

  //Save newTasks to localStorage with key "tasks"
  stringifyJSONToLocalStorage("tasks", newTasks);

  //Push to the taskList
  location.href = "/";
};
