import { mainMenuController } from "../main-menu/mainMenuController.js";
import { productDetailController } from "./productDetailController.js";

document.addEventListener("DOMContentLoaded", () => {
  const productDetail = document.getElementById("product-detail");
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  productDetailController(productDetail, productId);
  const mainMenu = document.getElementById("main-menu");
  mainMenuController(mainMenu);
});
