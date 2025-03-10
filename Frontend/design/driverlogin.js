document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const loginData = { email, password };

        fetch("http://localhost:3000/driver-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Login successful! Redirecting...");
                window.location.href = "dashboard.html"; // Redirect to driver dashboard
            } else {
                alert("Login failed: " + data.message);
            }
        })
        .catch(error => console.error("Error logging in:", error));
    });
});
