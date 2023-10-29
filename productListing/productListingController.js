import { dispatchCustomEvent } from "../utils/customEvent.js";
import { getProduct } from "./productListingModel.js";
import { renderProduct } from "./productListingView.js";

export const productListingController = async (productListing) => {
  try {
    dispatchCustomEvent("productListingStarted", productListing);
    const products = await getProduct();
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product-div");
      productDiv.innerHTML = renderProduct(product);
      productListing.appendChild(productDiv);
    });
  } catch (error) {
    alert(error);
  } finally {
    dispatchCustomEvent("productListingEnded", productListing);
  }
};
