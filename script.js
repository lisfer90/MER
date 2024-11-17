// script.js

// Usuario y contraseña predefinidos
const adminCredentials = {
  username: "admin",
  password: "admin123"
};

// Función para iniciar sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === adminCredentials.username && password === adminCredentials.password) {
    // Guardamos el estado de administrador en localStorage
    localStorage.setItem('isAdmin', 'true');
    window.location.href = "admin.html"; // Redirigimos al administrador
  } else {
    alert("Credenciales incorrectas. Intenta de nuevo.");
  }
});
// script.js

// Función para verificar si el usuario está logueado como admin
function checkAdmin() {
  if (localStorage.getItem('isAdmin') !== 'true') {
    window.location.href = "login.html"; // Redirigir si no está logueado
  }
}

// Función para agregar un producto
document.getElementById('add-product-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const productName = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;
  const productImage = document.getElementById('product-image').value;
  
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const newProduct = {
    name: productName,
    price: productPrice,
    image: productImage
  };
  
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products)); // Guardar productos en localStorage
  loadProducts(); // Recargar productos
});

// Función para cargar productos en la página
function loadProducts() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const productList = document.getElementById('product-list');
  
  productList.innerHTML = ''; // Limpiar lista antes de agregar los productos

  products.forEach(function(product) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${product.name}</strong> - $${product.price} <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;">`;
    productList.appendChild(li);
  });
}

// Verificar si el admin está logueado cuando carga la página de administración
checkAdmin();
loadProducts();
