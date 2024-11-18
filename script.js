// script.js

const adminCredentials = {
  username: "admin",
  password: "admin123" // Contraseña por defecto
};

// Verificar si el admin está logueado
function checkAdmin() {
  if (localStorage.getItem('isAdmin') !== 'true') {
    window.location.href = "login.html"; // Redirigir si no está logueado
  }
}

// Función para iniciar sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Verificamos si el usuario es correcto y la contraseña guardada
  const savedPassword = localStorage.getItem('adminPassword') || adminCredentials.password;

  if (username === adminCredentials.username && password === savedPassword) {
    // Guardamos el estado de administrador en localStorage
    localStorage.setItem('isAdmin', 'true');
    window.location.href = "admin.html"; // Redirigir al panel del administrador
  } else {
    alert("Credenciales incorrectas. Intenta de nuevo.");
  }
});

// Función para cambiar la contraseña
function changePassword() {
  const newPassword = prompt("Introduce la nueva contraseña:");
  if (newPassword) {
    localStorage.setItem('adminPassword', newPassword);
    alert("Contraseña cambiada con éxito.");
  } else {
    alert("La contraseña no puede estar vacía.");
  }
}

// Mostrar opción para cambiar la contraseña en el panel de administración
document.getElementById('change-password').addEventListener('click', changePassword);

// Código previo para otras funcionalidades
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");
});

// Código para la galería interactiva
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".gallery-image");

    images.forEach(image => {
        image.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = image.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


