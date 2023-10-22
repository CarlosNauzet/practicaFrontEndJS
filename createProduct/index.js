import { createProductController } from "./createProductController.js";

document.addEventListener("DOMContentLoaded", () => {
  const createProductForm = document.getElementById("create-product-form");
  console.log(createProductForm);
  createProductController(createProductForm);
});
