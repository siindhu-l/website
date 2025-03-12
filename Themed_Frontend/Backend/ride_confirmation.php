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
    $estimated_fare = trim($_POST["estimated_fare"]);
    $driver_name = trim($_POST["driver_name"]);
    $driver_rating = trim($_POST["driver_rating"]);
    $car_details = trim($_POST["car_details"]);
    $payment_method = trim($_POST["payment_method"]);

    // Basic validation
    if (empty($pickup) || empty($dropoff) || empty($estimated_fare) || empty($driver_name) || empty($driver_rating) || empty($car_details) || empty($payment_method)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit();
    }

    // Insert ride confirmation record into database
    $sql = "INSERT INTO ride_confirmations (pickup_location, dropoff_location, estimated_fare, driver_name, driver_rating, car_details, payment_method, confirmation_status) 
            VALUES (?, ?, ?, ?, ?, ?, ?, 'Confirmed')";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssdsdss", $pickup, $dropoff, $estimated_fare, $driver_name, $driver_rating, $car_details, $payment_method);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Ride confirmed successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error. Please try again."]);
    }

    // Close connections
    $stmt->close();
    $conn->close();
}
?>
