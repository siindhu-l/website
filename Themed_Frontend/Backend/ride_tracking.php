<?php
// Database connection
$host = "localhost";
$username = "root"; // Change as needed
$password = ""; // Change as needed
$database = "uniride";

$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]));
}

// Fetch ride location and status
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $ride_id = 1; // Example ride ID (modify as needed)
    $sql = "SELECT pickup_location, dropoff_location, latitude, longitude, ride_status FROM rides WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $ride_id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($row = $result->fetch_assoc()) {
        echo json_encode(["status" => "success", "ride" => $row]);
    } else {
        echo json_encode(["status" => "error", "message" => "Ride not found."]);
    }
    $stmt->close();
}

// Cancel ride
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["cancel"])) {
    $ride_id = 1; // Example ride ID (modify as needed)
    $sql = "UPDATE rides SET ride_status = 'canceled' WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $ride_id);
    
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Ride canceled successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to cancel ride."]);
    }
    $stmt->close();
}

$conn->close();
?>
