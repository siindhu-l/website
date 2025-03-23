document.addEventListener("DOMContentLoaded", function () {
    // Get sidebar buttons
    document.getElementById("dashboard-btn").addEventListener("click", function () {
        window.location.href = "dashboard.php"; // Redirect to dashboard data
    });

    document.getElementById("users-btn").addEventListener("click", function () {
        window.location.href = "users.php"; // Redirect to users database
    });

    document.getElementById("bookings-btn").addEventListener("click", function () {
        window.location.href = "bookings.php"; // Redirect to bookings data
    });

    document.getElementById("payments-btn").addEventListener("click", function () {
        window.location.href = "payments.php"; // Redirect to payments data
    });
});

// Logout function
function logout() {
    window.location.href = "logout.php"; // Redirect to logout script
}
