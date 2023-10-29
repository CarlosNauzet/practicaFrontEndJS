import { loaderController } from "../loader/loaderController.js";
import { logInController } from "./logInController.js";

document.addEventListener("DOMContentLoaded", () => {
  const logInForm = document.getElementById("login-form");
  // 2. traigo la sección que acabo de crear y la  guardado en una varaible
  const loaderLogin = document.getElementById("loader-section");
  // 3. Me traigo el showloader y hide l0oader desde loaderController
  const { showLoader, hideLoader } = loaderController(loaderLogin);
  // 6. Añado eventlistener para mostrar el loader
  logInForm.addEventListener("loginStarted", () => {
    showLoader();
  });
  // 7. añado eventlistener para ocultar el loader
  logInForm.addEventListener("loginEnded", () => {
    hideLoader();
  });

  logInController(logInForm);
});
