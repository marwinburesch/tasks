import "./iconButton.css";
import iconButtonMenu from "./iconButton-menu.html";
import iconButtonNotification from "./iconButton-notification.html";

export default {
  title: "Components/IconButton",
  parameters: { layout: "centered" },
};

export const menu = () => iconButtonMenu;
export const notification = () => iconButtonNotification;
