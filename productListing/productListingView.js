export const renderProduct = (product) => {
  return `
    <img scr="${product.image}" alt="product-image" />
    <p>Name: ${product.name}</p>
    <p>Description: ${product.description}</p>
    <p>Price: ${product.price}</p>
    <p>State: ${product.tradeIn}</p>
    `;
};
