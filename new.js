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
  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );
  const textInput = document.querySelector(".addTaskForm__textInput");

  const selectedDate = checkedDateInput.value;
  const taskName = textInput.value;
  console.log(selectedDate, taskName);
};
