document.getElementById("add-product-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value;

  const newProduct = { name, price, image };

  // Recuperar productos del Local Storage
  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Agregar el nuevo producto
  products.push(newProduct);

  // Guardar productos en el Local Storage
  localStorage.setItem("products", JSON.stringify(products));

  alert("Producto agregado exitosamente");
  this.reset();
});
