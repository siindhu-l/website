<?php
// Database connection
$host = "localhost"; // Change if needed
$username = "root"; // Change if needed
$password = ""; // Change if needed
$database = "uniride"; // Database name

$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]));
}

// Handle POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pickup = trim($_POST["pickup"]);
    $dropoff = trim($_POST["dropoff"]);
    $distance = trim($_POST["distance"]);
    $total_fare = trim($_POST["total_fare"]);
    $rating = isset($_POST["rating"]) ? trim($_POST["rating"]) : NULL;

    // Basic validation
    if (empty($pickup) || empty($dropoff) || empty($distance) || empty($total_fare)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit();
    }

    // Insert ride record into database
    $sql = "INSERT INTO rides (pickup_location, dropoff_location, distance, total_fare, rating) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssdds", $pickup, $dropoff, $distance, $total_fare, $rating);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Ride recorded successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error. Please try again."]);
    }

    // Close connections
    $stmt->close();
    $conn->close();
}
?>
