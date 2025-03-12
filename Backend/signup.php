<?php
$servername = "localhost";
$username = "root"; // Default XAMPP MySQL username
$password = ""; // Default XAMPP MySQL password (empty)
$dbname = "uniride";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash password for security

    $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $password);

    if ($stmt->execute()) {
        echo "<script>alert('Account created successfully!'); window.location.href='login.html';</script>";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    $stmt->close();
}
$conn->close();
?>
