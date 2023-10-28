export const renderProduct = (product) => {
  return `
      <img scr="${product.image}" alt="product-image" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'" />
      <p class="namestyle">Name: ${product.name}</p>
      <p class="namestyle">Description: ${product.description}</p>
      <p class="price-state">Price: ${product.price}</p>
      <p class="price-state">State: ${product.tradeIn}</p>
      `;
};
