<?php
include 'conexion.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de Productos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #fff;
        }
        .producto {
            display: inline-block;
            width: 30%;
            margin: 10px;
            background-color: #222;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

    <h1>Catálogo de Productos</h1>

    <?php
    $sql = "SELECT * FROM productos";
    $result = mysqli_query($conn, $sql);
    while ($producto = mysqli_fetch_assoc($result)) {
    ?>
        <div class="producto">
            <img src="<?php echo $producto['imagen']; ?>" width="200" height="200" alt="Producto">
            <h3><?php echo $producto['nombre']; ?></h3>
            <p><?php echo $producto['descripcion']; ?></p>
            <p>Precio: $<?php echo $producto['precio']; ?></p>
        </div>
    <?php } ?>

</body>
</html>
