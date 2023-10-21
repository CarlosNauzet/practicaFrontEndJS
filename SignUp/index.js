import { signUpController } from "./signUpController.js";

document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.getElementById("signup-form");
  signUpController(signUpForm);
});
