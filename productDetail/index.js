import { loaderController } from "../loader/loaderController.js";
import { mainMenuController } from "../main-menu/mainMenuController.js";
import { productDetailController } from "./productDetailController.js";

document.addEventListener("DOMContentLoaded", () => {
  const productDetail = document.getElementById("product-detail");
  const productDetailLoader = document.getElementById("loader-section");
  const { showLoader, hideLoader } = loaderController(productDetailLoader);
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  productDetail.addEventListener("getProductStarted", () => {
    showLoader();
  });
  productDetail.addEventListener("deleteStarted", () => {
    showLoader();
  });

  productDetail.addEventListener("getProductEnded", () => {
    hideLoader();
  });
  productDetail.addEventListener("deleteEnded", () => {
    hideLoader();
  });
  productDetailController(productDetail, productId);

  const mainMenu = document.getElementById("main-menu");
  mainMenuController(mainMenu);
});
