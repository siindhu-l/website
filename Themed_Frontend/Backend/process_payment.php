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
    $card_name = trim($_POST["card_name"]);
    $card_number = trim($_POST["card_number"]);
    $expiry = trim($_POST["expiry"]);
    $cvv = trim($_POST["cvv"]);
    $payment_method = trim($_POST["payment_method"]);

    // Basic validation
    if (empty($card_name) || empty($card_number) || empty($expiry) || empty($cvv) || empty($payment_method)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit();
    }

    // Mask card number except last 4 digits
    $masked_card_number = str_repeat("*", 12) . substr($card_number, -4);

    // Insert payment record into database
    $sql = "INSERT INTO payments (card_name, card_number, expiry, cvv, payment_method, payment_status) VALUES (?, ?, ?, ?, ?, 'successful')";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $card_name, $masked_card_number, $expiry, $cvv, $payment_method);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Payment processed successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error. Please try again."]);
    }

    // Close connections
    $stmt->close();
    $conn->close();
}
?>
