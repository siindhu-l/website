document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const email = document.querySelector('input[type="text"]').value.trim();
        const password = document.querySelector('input[type="password"]').value.trim();
        const rememberMe = document.getElementById("remember").checked;

        // Simple validation (you can extend it with proper authentication)
        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }

        // Simulating a successful login
        alert("✅ Login Successful!");

        // You can redirect to another page upon successful login
        // window.location.href = "dashboard.html";

        // If "Remember Me" is checked, save credentials (for demo purposes only, not secure)
        if (rememberMe) {
            localStorage.setItem("rememberedEmail", email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }
    });

    // Auto-fill remembered email
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
        document.querySelector('input[type="text"]').value = rememberedEmail;
        document.getElementById("remember").checked = true;
    }
});
