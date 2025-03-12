document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        const loginData = { username, password };

        fetch("http://localhost:3000/admin-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Login successful! Redirecting...");
                window.location.href = "admin-dashboard.html"; // Redirect to admin dashboard
            } else {
                alert("Login failed: " + data.message);
            }
        })
        .catch(error => console.error("Error logging in:", error));
    });
});
