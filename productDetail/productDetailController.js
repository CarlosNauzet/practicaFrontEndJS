import { decodeToken } from "../utils/decodeToken.js";
import { getProduct } from "./productDetailModel.js";
import { renderProduct } from "./productDetailView.js";

export const productDetailController = async (productDetail, productId) => {
  const accessToken = localStorage.getItem("accessToken");
  const user = decodeToken(accessToken);
  try {
    const product = await getProduct(productId);
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-div");
    productDiv.innerHTML = renderProduct(product);
    productDetail.appendChild(productDiv);
    if (product.user.username === user.username) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete product";
      productDetail.appendChild(deleteBtn);
      // TODO Event listener (botón para borrar el producto);
    }
  } catch (error) {
    alert(error);
  }
};
