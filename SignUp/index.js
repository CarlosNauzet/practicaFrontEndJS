import { loaderController } from "../loader/loaderController.js";
import { signUpController } from "./signUpController.js";

document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.getElementById("signup-form");
  const loaderSignup = document.getElementById("loader-section");
  const { showLoader, hideLoader } = loaderController(loaderSignup);
  signUpForm.addEventListener("signupStarted", () => {
    console.log("loading");
    showLoader();
  });
  signUpForm.addEventListener("signupEnded", () => {
    hideLoader();
  });
  signUpController(signUpForm);
});
