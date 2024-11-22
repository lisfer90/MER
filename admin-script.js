// Verificar si el usuario está autenticado
if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "index.html";
}

// Cerrar sesión
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
});

// Manejo de productos
const productList = JSON.parse(localStorage.getItem("products")) || [];

// Renderizar productos
function renderProducts() {
  const productContainer = document.getElementById("productList");
  productContainer.innerHTML = "";

  productList.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
      <p>Detalles: ${product.details}</p>
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <button onclick="deleteProduct(${index})">Eliminar</button>
    `;
    productContainer.appendChild(productCard);
  });
}

// Agregar producto
document.getElementById("addProductForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const details = document.getElementById("productDetails").value;
  const image = document.getElementById("productImage").files[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    const newProduct = {
      name,
      price,
      details,
      image: e.target.result // Imagen como base64
    };

    productList.push(newProduct);
    localStorage.setItem("products", JSON.stringify(productList));
    renderProducts();
  };
  reader.readAsDataURL(image);

  // Limpiar formulario
  this.reset();
});

// Eliminar producto
function deleteProduct(index) {
  productList.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productList));
  renderProducts();
}

// Inicializar
renderProducts();
