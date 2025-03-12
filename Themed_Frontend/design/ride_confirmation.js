// ride_confirmation.js

// Function to handle the confirmation of the ride
function confirmRide() {
    // Display a confirmation message when the button is clicked
    document.getElementById("confirmationMessage").innerText = "✅ Your ride has been confirmed!";

    // Set a timeout to show a pop-up after 2 minutes (120 seconds)
    setTimeout(function() {
        alert("⏰ your ride is on the way.");
    }, 6000);  // 120000 milliseconds = 2 minutes


    setTimeout(function() {
    window.location.href = 'completion.html';
    }, 20000);  // 120000 milliseconds = 2 minutes
}


// This will load the estimated fare when the page is loaded
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const estimatedFare = params.get('fare') || "N/A";

    // Display the estimated fare in the ride details section
    document.querySelector('.ride-details').innerHTML = `
        <p><strong>Estimated Fare:</strong> ₹${estimatedFare}</p>
    `;
};
