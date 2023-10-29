export const getProduct = async (id) => {
  const url = `http://localhost:8000/api/products/${id}?_expand=user`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "there was an error, try again later");
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// crear una función que se llame delete product que vaya al back con el metedo delete para que el producto con el ID

export const deleteProduct = async (id, token) => {
  const url = `http://localhost:8000/api/products/${id}`;
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "there was an error, try again later");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
