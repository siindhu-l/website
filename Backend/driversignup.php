<?php
// Database connection settings
$servername = "localhost"; // Database host, typically localhost
$username = "root"; // MySQL username
$password = ""; // MySQL password (empty for localhost)
$dbname = "uniride_db"; // Database name

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle the form submission when the request is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize the form inputs
    $fullname = mysqli_real_escape_string($conn, $_POST['fullname']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $confirm_password = mysqli_real_escape_string($conn, $_POST['confirm-password']);

    // Check if the passwords match
    if ($password !== $confirm_password) {
        echo "Passwords do not match.";
        exit;
    }

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // SQL query to insert the new driver into the database
    $sql = "INSERT INTO drivers (fullname, username, email, password) VALUES ('$fullname', '$username', '$email', '$hashed_password')";

    // Execute the query and check for success
    if ($conn->query($sql) === TRUE) {
        echo "New driver registered successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
