import { productDetailController } from "./productDetailController.js";

document.addEventListener("DOMContentLoaded", () => {
  const productDetail = document.getElementById("product-detail");
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  productDetailController(productDetail, productId);
});
