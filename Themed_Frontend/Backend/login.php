<?php
// Database connection
$servername = "localhost";
$username = "root"; // Default for XAMPP
$password = ""; // Leave empty in XAMPP
$dbname = "uniride"; // Change to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prevent SQL Injection
    $email = $conn->real_escape_string($email);
    $password = $conn->real_escape_string($password);

    // Verify user credentials
    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Login successful! Redirecting...";
        // Redirect to dashboard (update "dashboard.php" accordingly)
        header("refresh:2; url=dashboard.php");
    } else {
        echo "Invalid email or password!";
    }
}

// Close the database connection
$conn->close();
?>
