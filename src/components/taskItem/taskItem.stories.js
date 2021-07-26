import "./taskItem.css";
import taskItemRegular from "./taskItemRegular.html";
import taskItemDone from "./taskItemDone.html";

export default {
  title: "Components/TaskItem",
  parameters: { layout: "centered" },
};

export const regular = () => taskItemRegular;
export const done = () => taskItemDone;
