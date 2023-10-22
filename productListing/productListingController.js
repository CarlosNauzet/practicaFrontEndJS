import { getProduct } from "./productListingModel.js";
import { renderProduct } from "./productListingView.js";

export const productListingController = async (productListing) => {
  try {
    const products = await getProduct();
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = renderProduct(product);
      productListing.appendChild(productDiv);
    });
  } catch (error) {
    alert(error);
  }
};
