import { mainMenuController } from "./main-menu/mainMenuController.js";
import { productListingController } from "./productListing/productListingController.js";

document.addEventListener("DOMContentLoaded", () => {
  const productListing = document.getElementById("product-listing");
  productListingController(productListing);
  const mainMenu = document.getElementById("main-menu");
  mainMenuController(mainMenu);
});
