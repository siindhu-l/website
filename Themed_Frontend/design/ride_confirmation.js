document.getElementById('fare-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const pickup = document.getElementById('pickup').value.trim();
    const dropoff = document.getElementById('dropoff').value.trim();
    const distance = parseFloat(document.getElementById('distance').value.trim());

    if (!pickup || !dropoff || isNaN(distance) || distance <= 0) {
        alert('Please fill in all fields correctly with a valid distance.');
        return;
    }

    const farePerKm = 13; // Updated fare rate
    const estimatedFare = farePerKm * distance;

    document.getElementById('fare-result').innerText = `Estimated Fare: ₹${estimatedFare}`;

    // Save data in sessionStorage for easy retrieval
    sessionStorage.setItem('estimatedFare', `₹${estimatedFare}`);

    document.getElementById('continue-btn').style.display = 'block';
});

function navigateToConfirmation() {
    const pickup = document.getElementById('pickup').value.trim();
    const dropoff = document.getElementById('dropoff').value.trim();
    const estimatedFare = document.getElementById('fare-result').innerText.split('₹')[1].trim();
    sessionStorage.setItem('estimatedFare', `₹${estimatedFare}`);

    window.location.href = 'ride_confirmation.html';
}
