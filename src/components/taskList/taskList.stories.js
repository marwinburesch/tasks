import "./taskList.css";
import taskList from "./taskList.html";

export default {
  title: "Components/TaskList",
  parameters: { layout: "centered" },
};

export const regular = () => taskList;
