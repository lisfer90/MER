// Datos del administrador
const adminCredentials = {
  email: "admin@mer.com",
  password: "123456" // Cambia por una contraseña más segura si es necesario.
};

// Verificar el inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Comprobar si las credenciales son correctas
  if (email === adminCredentials.email && password === adminCredentials.password) {
    // Guardar el estado de sesión en el LocalStorage
    localStorage.setItem("isLoggedIn", "true");
    // Redirigir al panel de administración
    window.location.href = "admin-panel.html";
  } else {
    document.getElementById("loginError").style.display = "block"; // Mostrar error
  }
});
