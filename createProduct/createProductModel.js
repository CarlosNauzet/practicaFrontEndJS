export const createProduct = async (
  productname,
  productimage,
  productdescription,
  productprice,
  tradeIn,
  accessToken
) => {
  const body = {
    name: productname,
    image: productimage,
    description: productdescription,
    price: productprice,
    tradeIn,
  };

  const url = "http://localhost:8000/api/products";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
