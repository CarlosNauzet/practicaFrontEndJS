export const renderProduct = (product) => {
  return `
    <img scr="${product.image}" alt="product-image" />
    <p class="namestyle">Name: ${product.name}</p>
    <p class="namestyle">Description: ${product.description}</p>
    <p class="price-state">Price: ${product.price}</p>
    <p class="price-state">State: ${product.tradeIn}</p>
    `;
};
