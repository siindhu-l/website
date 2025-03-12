document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let emailOrPhone = document.getElementById('email-phone').value;

    if (emailOrPhone) {
        alert(`A password reset link has been sent to: ${emailOrPhone}`);
    } else {
        alert("Please enter a valid email or phone number.");
    }
});
