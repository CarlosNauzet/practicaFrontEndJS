import { createProduct } from "./createProductModel.js";

export const createProductController = (createProductForm) => {
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
      const productData = await createProduct(
        productname,
        productimage,
        productdescription,
        productprice,
        tradeIn,
        accessToken
      );
      alert("Product created succesfully");
      window.location.href = "/";
    } catch (error) {
      alert(error);
    }
  });
};
