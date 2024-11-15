<?php
// conexion.php
$host = "localhost";
$usuario = "root";
$contrasena = ""; // Si tienes contraseña en tu base de datos, escríbela aquí
$base_datos = "mi_tienda";

$conexion = mysqli_connect($host, $usuario, $contrasena, $base_datos);

// Verificar conexión
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>
