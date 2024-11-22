// Cargar productos desde localStorage
function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productList = document.getElementById("productList");

  if (products.length === 0) {
    productList.innerHTML = "<p>No hay productos disponibles.</p>";
    return;
  }

  productList.innerHTML = ""; // Limpiar la lista de productos actual

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.image}" alt="${product.name}" width="200">
      <p>Precio: $${product.price}</p>
      <p>Detalles: ${product.details}</p>
    `;
    productList.appendChild(productDiv);
  });
}

// Inicializar la lista de productos
loadProducts();
