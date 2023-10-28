import { getProduct } from "./productDetailModel.js";
import { renderProduct } from "./productDetailView.js";

export const productDetailController = async (productDetail, productId) => {
  try {
    const product = await getProduct(productId);
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-div");
    productDiv.innerHTML = renderProduct(product);
    productDetail.appendChild(productDiv);
  } catch (error) {
    alert(error);
  }
};
