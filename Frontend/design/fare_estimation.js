document.addEventListener("DOMContentLoaded", function () {
    const fareForm = document.getElementById("fare-form");
    const fareResult = document.getElementById("fare-result");

    // Base fare rates per km for different ride types
    const fareRates = {
        uberX: 1.5, // UnirideX
        uberXL: 2.0, // UnirideXL
        uberBlack: 3.0, // Uniride Black
        uberComfort: 2.5, // Uniride Comfort
    };

    fareForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const pickup = document.getElementById("pickup").value.trim();
        const dropoff = document.getElementById("dropoff").value.trim();
        const rideType = document.getElementById("ride-type").value;

        if (pickup === "" || dropoff === "") {
            fareResult.innerHTML = "<p style='color: red;'>Please enter both pickup and dropoff locations.</p>";
            return;
        }

        // Simulated distance calculation (in km) - In real applications, use Google Maps API
        const distance = Math.random() * (15 - 3) + 3; // Random distance between 3km and 15km

        // Calculate estimated fare
        const estimatedFare = (fareRates[rideType] * distance).toFixed(2);

        fareResult.innerHTML = `
            <h3>Estimated Fare: $${estimatedFare}</h3>
            <p>Ride Type: ${document.querySelector(`#ride-type option[value="${rideType}"]`).textContent}</p>
            <p>Estimated Distance: ${distance.toFixed(2)} km</p>
        `;
    });
});
