import { logInController } from "./logInController.js";

document.addEventListener("DOMContentLoaded", () => {
  const logInForm = document.getElementById("login-form");
  logInController(logInForm);
});
