document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const fullName = document.getElementById("fullname").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Simple validation checks
        if (!fullName || !username || !email || !password || !confirmPassword) {
            alert("Please fill out all fields.");
            return;
        }

        // Email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password strength validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Confirm password match check
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Simulate successful signup (In a real app, send data to a backend)
        alert("✅ Signup successful! You can now log in.");
        window.location.href = "driver-login.html"; // Redirect to login page
    });
});
