document.addEventListener('DOMContentLoaded', function () {
    const rideForm = document.getElementById('ride-form');

    if (rideForm) {
        rideForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Collect ride details
            const pickup = document.getElementById('pickup-location').value.trim();
            const dropoff = document.getElementById('dropoff-location').value.trim();
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if (pickup && dropoff && date && time) {
                alert('Ride booked successfully! Redirecting to fare estimation...');
                
                // Redirect to 'fare_estimation.html'
                window.location.href = 'fare_estimation.html';
            } else {
                alert('Please fill in all the details before booking.');
            }
        });
    } else {
        console.error('Ride booking form not found.');
    }
});
