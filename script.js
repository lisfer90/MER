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
