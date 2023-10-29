import { loaderController } from "./loader/loaderController.js";
import { mainMenuController } from "./main-menu/mainMenuController.js";
import { productListingController } from "./productListing/productListingController.js";

document.addEventListener("DOMContentLoaded", () => {
  const productListing = document.getElementById("product-listing");
  const loaderProductListing = document.getElementById("loader-section");
  const { showLoader, hideLoader } = loaderController(loaderProductListing);
  productListing.addEventListener("productListingStarted", () => {
    showLoader();
  });
  productListing.addEventListener("productListingEnded", () => {
    hideLoader();
  });
  productListingController(productListing);
  const mainMenu = document.getElementById("main-menu");
  mainMenuController(mainMenu);
});
