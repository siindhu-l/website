<?php
// Database connection settings
$servername = "localhost"; // Your database host, usually localhost
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password (empty for localhost by default)
$dbname = "uniride_db"; // The database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle the form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Query to find the driver by email
    $sql = "SELECT * FROM drivers WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Check if the password matches
        $row = $result->fetch_assoc();
        
        // Verify the password (assuming you hashed the passwords when storing them)
        if (password_verify($password, $row['password'])) {
            // Login successful
            echo "Login successful! Welcome " . $row['email'];
            // You can redirect to a new page, e.g., dashboard, after successful login
            // header("Location: dashboard.php"); // Uncomment to redirect
        } else {
            // Invalid password
            echo "Invalid password!";
        }
    } else {
        // No user found with the given email
        echo "No user found with that email address.";
    }
}

// Close the connection
$conn->close();
?>
