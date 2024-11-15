<?php
// registro.php
include 'conexion.php';

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contrasena = MD5($_POST['contrasena']); // Encriptamos la contraseña

// Verificar si el correo ya está registrado
$query = "SELECT * FROM usuarios WHERE correo = '$correo'";
$resultado = mysqli_query($conexion, $query);

if (mysqli_num_rows($resultado) > 0) {
    echo "<script>alert('Este correo ya está registrado.'); window.location.href='registro.html';</script>";
} else {
    // Insertar el nuevo usuario en la base de datos con rol cliente
    $insertar = "INSERT INTO usuarios (nombre, correo, contrasena, rol) VALUES ('$nombre', '$correo', '$contrasena', 'cliente')";
    if (mysqli_query($conexion, $insertar)) {
        echo "<script>alert('Registro exitoso. Ahora puede iniciar sesión.'); window.location.href='login.html';</script>";
    } else {
        echo "<script>alert('Error en el registro.'); window.location.href='registro.html';</script>";
    }
}
?>
<?php
// registro.php
include 'conexion.php';

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contrasena = MD5($_POST['contrasena']); // Encriptamos la contraseña

// Verificar si el correo ya está registrado
$query = "SELECT * FROM usuarios WHERE correo = '$correo'";
$resultado = mysqli_query($conexion, $query);

if (mysqli_num_rows($resultado) > 0) {
    echo "<script>alert('Este correo ya está registrado.'); window.location.href='registro.html';</script>";
} else {
    // Insertar el nuevo usuario en la base de datos con rol cliente
    $insertar = "INSERT INTO usuarios (nombre, correo, contrasena, rol) VALUES ('$nombre', '$correo', '$contrasena', 'cliente')";
    if (mysqli_query($conexion, $insertar)) {
        echo "<script>alert('Registro exitoso. Ahora puede iniciar sesión.'); window.location.href='login.html';</script>";
    } else {
        echo "<script>alert('Error en el registro.'); window.location.href='registro.html';</script>";
    }
}
?>
