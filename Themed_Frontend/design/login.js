document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Sample credentials for demo purposes
            const validEmail = 'user@example.com';
            const validPassword = 'password123';

            // Collect entered data
            const email = document.querySelector('input[type="text"]').value.trim();
            const password = document.querySelector('input[type="password"]').value.trim();

            // Basic validation and authentication check
            if (email === validEmail && password === validPassword) {
                alert('Login successful!');
                
                // Redirect to 'bookride.html'
                window.location.href = 'bookride.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    } else {
        console.error('Login form not found.');
    }
});
