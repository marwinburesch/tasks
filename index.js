const menuButton = document.querySelector(".menuButton");
menuButton.onclick = sendAlert;

function sendAlert() {
  alert("Hello World!");
}

const taskList = document.querySelector(".taskList");

const newTask = document.createElement("p");
newTask.innerText = "Example Task";

taskList.append(newTask);
