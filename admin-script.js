// Verificar si el usuario está logueado
if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "login.html"; // Si no está logueado, redirigir al login
}

// Manejar el cierre de sesión
document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html"; // Redirigir al login al cerrar sesión
});

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

    // Agregar el producto a la lista
    const productList = document.getElementById("productList");
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.image}" alt="${product.name}" width="100">
      <p>Precio: $${product.price}</p>
      <p>Detalles: ${product.details}</p>
      <button>Eliminar</button>
    `;
    productList.appendChild(productDiv);
  }
});
