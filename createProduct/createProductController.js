import { dispatchCustomEvent } from "../utils/customEvent.js";
import { createProduct } from "./createProductModel.js";

export const createProductController = (createProductForm) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    window.location.href = "/";
  }
  createProductForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const productData = new FormData(createProductForm);
    const productname = productData.get("productname");
    const productimage = productData.get("productimage");
    const productdescription = productData.get("productdescription");
    const productprice = productData.get("productprice");
    const tradeIn = productData.get("trade-in");
    const accessToken = localStorage.getItem("accessToken");

    try {
      dispatchCustomEvent("createProductStarted", createProductForm);
      const productData = await createProduct(
        productname,
        productimage,
        productdescription,
        productprice,
        tradeIn,
        accessToken
      );
      window.location.href = "/";
      alert("Product created succesfully");
    } catch (error) {
      alert(error);
    } finally {
      dispatchCustomEvent("createProductEnded", createProductForm);
    }
  });
};
