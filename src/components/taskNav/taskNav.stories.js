import "./taskNav.css";
import taskNav from "./taskNav.html";
import taskNavActive from "./taskNavActive.html";

export default {
  title: "Components/TaskNav",
  parameters: { layout: "centered" },
};

export const regular = () => taskNav;
export const active = () => taskNavActive;
