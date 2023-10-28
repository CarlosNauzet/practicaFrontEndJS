import { mainMenuController } from "../main-menu/mainMenuController.js";
import { createProductController } from "./createProductController.js";

document.addEventListener("DOMContentLoaded", () => {
  const mainMenu = document.getElementById("main-menu");
  mainMenuController(mainMenu);
  const createProductForm = document.getElementById("create-product-form");
  createProductController(createProductForm);
});
