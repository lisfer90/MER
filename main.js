// main.js

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario para pruebas

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validación básica
        if (name && email && message) {
            formMessage.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";
            formMessage.style.color = "green";
            contactForm.reset(); // Limpiar el formulario después de enviarlo
        } else {
            formMessage.textContent = "Por favor, completa todos los campos.";
            formMessage.style.color = "red";
        }
    });
});
