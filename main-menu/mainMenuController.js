import { loggedItems, loginItems } from "./mainMenuView.js";

export const mainMenuController = (menuNav) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    menuNav.innerHTML = loggedItems();
    const loggedOutBtn = menuNav.querySelector("#btn-logout");
    loggedOutBtn.addEventListener("click", () => {
      localStorage.removeItem("accessToken");
      window.location.href = "/";
    });
  } else {
    menuNav.innerHTML = loginItems();
  }
};
