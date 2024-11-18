// Leer productos desde el Local Storage
function loadProducts() {
  const productList = document.getElementById('product-list');
  const products = JSON.parse(localStorage.getItem('products')) || [];

  productList.innerHTML = ''; // Limpiar contenido previo
  if (products.length === 0) {
    productList.innerHTML = '<p class="text-center">No hay productos en el catálogo.</p>';
    return;
  }

  products.forEach(product => {
    const productCard = `
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price}</p>
          </div>
        </div>
      </div>`;
    productList.innerHTML += productCard;
  });
}

// Cargar productos al abrir la página
document.addEventListener('DOMContentLoaded', loadProducts);
