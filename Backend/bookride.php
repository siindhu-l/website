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

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and capture form data
    $pickup_location = mysqli_real_escape_string($conn, $_POST['pickup-location']);
    $dropoff_location = mysqli_real_escape_string($conn, $_POST['dropoff-location']);
    $date = mysqli_real_escape_string($conn, $_POST['date']);
    $time = mysqli_real_escape_string($conn, $_POST['time']);

    // SQL query to insert data into the 'bookings' table
    $sql = "INSERT INTO bookings (pickup_location, dropoff_location, date, time) 
            VALUES ('$pickup_location', '$dropoff_location', '$date', '$time')";

    // Execute the query and check for success
    if ($conn->query($sql) === TRUE) {
        echo "Ride booked successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
