<?php
include 'db_connect.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pickup = trim($_POST["pickup"]);
    $dropoff = trim($_POST["dropoff"]);
    $ride_type = trim($_POST["ride_type"]);

    // Fare calculation logic (example base fares)
    $base_fare = [
        "uberX" => 5.00,
        "uberXL" => 8.00,
        "uberBlack" => 15.00,
        "uberComfort" => 10.00
    ];

    $distance_factor = 2.5; // Example: $2.5 per km (change as needed)
    $random_distance = rand(2, 15); // Mock distance (replace with actual distance API)
    $estimated_fare = $base_fare[$ride_type] + ($random_distance * $distance_factor);

    // Insert estimated fare into database
    $sql = "INSERT INTO fare_estimations (pickup, dropoff, ride_type, estimated_fare) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssd", $pickup, $dropoff, $ride_type, $estimated_fare);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "fare" => number_format($estimated_fare, 2)]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error estimating fare."]);
    }

    $stmt->close();
    $conn->close();
}
?>
