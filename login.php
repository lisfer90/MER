<?php
// login.php
include 'conexion.php';

// Obtener datos del formulario
$correo = $_POST['correo'];
$contrasena = MD5($_POST['contrasena']);

// Verificar credenciales
$query = "SELECT * FROM usuarios WHERE correo = '$correo' AND contrasena = '$contrasena'";
$resultado = mysqli_query($conexion, $query);

if (mysqli_num_rows($resultado) == 1) {
    $usuario = mysqli_fetch_assoc($resultado);
    if ($usuario['rol'] === 'admin') {
        header("Location: admin.html"); // Redirige al panel de administración
    } else {
        header("Location: catalogo.html"); // Redirige al catálogo para clientes
    }
} else {
    echo "<script>alert('Correo o contraseña incorrectos.'); window.location.href='login.html';</script>";
}
?>
<?php
// login.php
include 'conexion.php';

// Obtener datos del formulario
$correo = $_POST['correo'];
$contrasena = MD5($_POST['contrasena']);

// Verificar credenciales
$query = "SELECT * FROM usuarios WHERE correo = '$correo' AND contrasena = '$contrasena'";
$resultado = mysqli_query($conexion, $query);

if (mysqli_num_rows($resultado) == 1) {
    $usuario = mysqli_fetch_assoc($resultado);
    if ($usuario['rol'] === 'admin') {
        header("Location: admin.html"); // Redirige al panel de administración
    } else {
        header("Location: catalogo.html"); // Redirige al catálogo para clientes
    }
} else {
    echo "<script>alert('Correo o contraseña incorrectos.'); window.location.href='login.html';</script>";
}
?>
