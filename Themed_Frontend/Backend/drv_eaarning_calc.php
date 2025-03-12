<?php
include 'db_connect.php'; // Include the database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get input values and sanitize them
    $trips = intval($_POST["trips"]);
    $earnings_per_trip = floatval($_POST["earnings_per_trip"]);
    $bonuses = floatval($_POST["bonuses"]);

    // Calculate total earnings
    $total_earnings = ($trips * $earnings_per_trip) + $bonuses;

    // Prepare SQL query to insert data
    $sql = "INSERT INTO driver_earnings (trips, earnings_per_trip, bonuses, total_earnings) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iddd", $trips, $earnings_per_trip, $bonuses, $total_earnings);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "total_earnings" => number_format($total_earnings, 2)]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error saving data."]);
    }

    $stmt->close();
    $conn->close();
}
?>
