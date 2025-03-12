<?php
// Database connection
$host = "localhost"; // Change if needed
$username = "root"; // Change if needed
$password = ""; // Change if needed
$database = "uniride"; // Database name

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]));
}

// Handle POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rating = intval($_POST["rating"]);
    $comments = trim($_POST["comments"]);

    // Validate inputs
    if ($rating < 1 || $rating > 5 || empty($comments)) {
        echo json_encode(["status" => "error", "message" => "Invalid input. Please provide a rating and comments."]);
        exit();
    }

    // Insert feedback into database
    $sql = "INSERT INTO feedback (rating, comments) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $rating, $comments);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Feedback submitted successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error. Please try again."]);
    }

    // Close connections
    $stmt->close();
    $conn->close();
}
?>
