document.addEventListener("DOMContentLoaded", function () {
    fetchDashboardStats();
});

function fetchDashboardStats() {
    fetch("fetch_admin_data.php")  // API endpoint to fetch data from backend
        .then(response => response.json())
        .then(data => {
            document.getElementById("total-users").textContent = data.total_users;
            document.getElementById("total-bookings").textContent = data.total_bookings;
            document.getElementById("total-earnings").textContent = `₹${data.total_earnings}`;
        })
        .catch(error => {
            console.error("Error fetching dashboard data:", error);
        });
}
