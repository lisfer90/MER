// Verificar si el usuario está logueado
if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "login.html"; // Si no está logueado, redirigir al login
}

// Manejar el cierre de sesión
document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html"; // Redirigir al login al cerrar sesión
});

// Cargar productos desde localStorage
function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Limpiar la lista de productos actual

  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.image}" alt="${product.name}" width="100">
      <p>Precio: $${product.price}</p>
      <p>Detalles: ${product.details}</p>
      <button class="btn btn-danger" onclick="deleteProduct(${index})">Eliminar</button>
    `;
    productList.appendChild(productDiv);
  });
}

// Agregar un producto al catálogo
document.getElementById("addProductForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productDetails = document.getElementById("productDetails").value;
  const productImage = document.getElementById("productImage").files[0];

  // Validar los datos
  if (productName && productPrice && productDetails && productImage) {
    const product = {
      name: productName,
      price: productPrice,
      details: productDetails,
      image: URL.createObjectURL(productImage),
    };

    // Obtener productos actuales desde localStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);

    // Guardar los productos en localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Cargar productos nuevamente
    loadProducts();

    // Limpiar el formulario
    document.getElementById("addProductForm").reset();
  }
});

// Eliminar un producto
function deleteProduct(index) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1); // Eliminar el producto de la lista
  localStorage.setItem("products", JSON.stringify(products)); // Actualizar el localStorage
  loadProducts(); // Recargar la lista de productos
}

// Inicializar la lista de productos
loadProducts();
