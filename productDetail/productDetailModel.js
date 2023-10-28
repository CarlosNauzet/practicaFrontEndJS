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
