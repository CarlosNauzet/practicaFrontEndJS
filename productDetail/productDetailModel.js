export const getProduct = async (id) => {
  const url = `http://localhost:8000/api/products/${id}?_expand=user`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// crear una función que se llame delete product que vaya al back con el metedo delete para que el producto con el ID
