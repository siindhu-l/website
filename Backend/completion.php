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
    $ride_id = mysqli_real_escape_string($conn, $_POST['ride_id']);
    $driver_id = mysqli_real_escape_string($conn, $_POST['driver_id']);
    $feedback = mysqli_real_escape_string($conn, $_POST['feedback']);

    // SQL query to insert the feedback into the database
    $sql = "INSERT INTO feedback (ride_id, driver_id, feedback) VALUES ('$ride_id', '$driver_id', '$feedback')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
