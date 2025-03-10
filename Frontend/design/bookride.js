document.addEventListener("DOMContentLoaded", function () {
    const rideForm = document.getElementById("ride-form");

    rideForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const pickupLocation = document.getElementById("pickup-location").value.trim();
        const dropoffLocation = document.getElementById("dropoff-location").value.trim();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Validate input fields
        if (!pickupLocation || !dropoffLocation || !date || !time) {
            alert("Please fill out all fields.");
            return;
        }

        // Validate date (Ensure the selected date is not in the past)
        const selectedDate = new Date(date + " " + time);
        const currentDate = new Date();
        if (selectedDate < currentDate) {
            alert("Please select a valid future date and time for your ride.");
            return;
        }

        // Simulate successful ride booking (In a real app, send data to a backend)
        alert(`✅ Ride booked successfully!\n🚗 Pickup: ${pickupLocation}\n📍 Dropoff: ${dropoffLocation}\n📅 Date: ${date}\n⏰ Time: ${time}`);

        // Optionally, reset the form after successful booking
        rideForm.reset();
    });
});
