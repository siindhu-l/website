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

// Handle incoming ride request
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["action"])) {
    $pickup = "123 Main Street"; // Example pickup location
    $dropoff = "456 Park Avenue"; // Example dropoff location
    $estimated_fare = 18.50; // Example fare
    $action = $_POST["action"];

    if ($action == "request") {
        // Insert a new ride request into the database
        $sql = "INSERT INTO ride_requests (pickup_location, dropoff_location, estimated_fare, request_status) VALUES (?, ?, ?, 'pending')";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssd", $pickup, $dropoff, $estimated_fare);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Ride request submitted successfully!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Database error."]);
        }
        $stmt->close();
    } elseif ($action == "accept" || $action == "decline") {
        // Update ride request status
        $status = ($action == "accept") ? "accepted" : "declined";
        $sql = "UPDATE ride_requests SET request_status = ? WHERE id = (SELECT id FROM ride_requests ORDER BY created_at DESC LIMIT 1)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $status);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Ride request $status!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Database update failed."]);
        }
        $stmt->close();
    }
}

// Close connection
$conn->close();
?>
