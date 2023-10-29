import { loaderController } from "../loader/loaderController.js";
import { mainMenuController } from "../main-menu/mainMenuController.js";
import { createProductController } from "./createProductController.js";

document.addEventListener("DOMContentLoaded", () => {
  const createProductForm = document.getElementById("create-product-form");
  const loaderCreateProductForm = document.getElementById("loader-section");
  const { showLoader, hideLoader } = loaderController(loaderCreateProductForm);
  const mainMenu = document.getElementById("main-menu");

  mainMenuController(mainMenu);
  createProductForm.addEventListener("createProductStarted", () => {
    showLoader();
  });
  createProductForm.addEventListener("createProductEnded", () => {
    hideLoader();
  });
  createProductController(createProductForm);
});
