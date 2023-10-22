import { productListingController } from "./productListing/productListingController.js";

document.addEventListener("DOMContentLoaded", () => {
  const productListing = document.getElementById("product-listing");
  productListingController(productListing);
});
