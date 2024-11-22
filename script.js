
// Datos de usuario predefinidos (puedes modificarlos o almacenarlos en un archivo JSON).
const adminCredentials = {
  email: "admin@mer.com",
  password: "123456" // Asegúrate de usar contraseñas seguras.
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validar credenciales
  if (email === adminCredentials.email && password === adminCredentials.password) {
    // Guardar estado de inicio de sesión en LocalStorage
    localStorage.setItem("isLoggedIn", true);
    // Redirigir al panel de administración
    window.location.href = "admin-panel.html";
  } else {
    document.getElementById("loginError").style.display = "block";
  }
});
