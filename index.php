<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenidos - MER y ENGA</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #fff;
            margin: 0;
            padding: 0;
        }
        .header {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            background-color: #000;
        }
        .header a {
            color: #FFB400;
            text-decoration: none;
            font-weight: bold;
        }
        .banner {
            width: 100%;
            height: 400px;
            background-image: url('banner.jpg');
            background-size: cover;
            background-position: center;
        }
        .content {
            text-align: center;
            padding: 50px 20px;
        }
    </style>
</head>
<body>

    <div class="header">
        <a href="login.php">Iniciar Sesión</a>
        <a href="registro.php">Registrarse</a>
    </div>

    <div class="banner"></div>

    <div class="content">
        <h1>Bienvenidos a MER y ENGA</h1>
        <p>Somos tu tienda online de artículos para construcción, PVC y eléctricos.</p>
        <a href="catalogo.php" style="color: #FFB400;">Ver Catálogo</a>
    </div>

</body>
</html>
