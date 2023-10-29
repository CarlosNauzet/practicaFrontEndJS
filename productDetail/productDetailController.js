import { dispatchCustomEvent } from "../utils/customEvent.js";
import { decodeToken } from "../utils/decodeToken.js";
import { deleteProduct, getProduct } from "./productDetailModel.js";
import { renderProduct } from "./productDetailView.js";

export const productDetailController = async (productDetail, productId) => {
  const accessToken = localStorage.getItem("accessToken");
  const user = decodeToken(accessToken);
  let product;
  try {
    dispatchCustomEvent("getProductStarted", productDetail);
    product = await getProduct(productId);
  } catch (error) {
    alert(error);
    window.location.href = "./index.html";
  } finally {
    dispatchCustomEvent("getProductEnded", productDetail);
  }

  const productDiv = document.createElement("div");
  productDiv.classList.add("product-div");
  productDiv.innerHTML = renderProduct(product);
  productDetail.appendChild(productDiv);
  if (product.user.username === user?.username) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete product";
    productDetail.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", async () => {
      try {
        dispatchCustomEvent("deleteStarted", productDetail);
        await deleteProduct(productId, accessToken);
        window.location.href = "./index.html";
        alert("Product deleted succesfully");
      } catch (error) {
        alert(error);
        window.location.href = "./index.html";
      } finally {
        dispatchCustomEvent("deleteEnded");
      }
    });
  }
};
