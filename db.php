<?php
$host = "localhost";  // Cambia si usas hosting externo
$dbname = "mer_innovar_solution";
$username = "root";  // Cambia si usas hosting externo
$password = "";      // Cambia si usas hosting externo

// Crear la conexión
$conn = new mysqli($host, $username, $password, $dbname);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}
?>
