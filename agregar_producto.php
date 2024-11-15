<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $imagen = $_FILES['imagen']['name'];
    $ruta_imagen = "imagenes/" . $imagen;

    move_uploaded_file($_FILES['imagen']['tmp_name'], $ruta_imagen);

    $sql = "INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES ('$nombre', '$descripcion', '$precio', '$ruta_imagen')";

    if (mysqli_query($conn, $sql)) {
        echo "Producto agregado exitosamente.";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>
