document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents default form submission

            // Collect user data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // Basic validation
            if (!name || !email || !password) {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate account creation (store data in localStorage for demo purposes)
            localStorage.setItem('user', JSON.stringify({ name, email }));

            // Redirect to 'bookride.html'
            window.location.href = 'bookride.html';
        });
    } else {
        console.error('Signup form not found.');
    }
});
