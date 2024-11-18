document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Usuario y contraseña predeterminados
  const adminUsername = "admin";
  const adminPassword = "admin123";

  if (username === adminUsername && password === adminPassword) {
    // Redirige a la página de administrador
    window.location.href = "admin.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
