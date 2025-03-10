<?php
$host = 'localhost';
$user = 'root'; // Usuario de la base de datos
$pass = ''; // Contraseña del usuario
$dbname = 'usuarios_db'; // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($host, $user, $pass, $dbname);

// Comprobar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
