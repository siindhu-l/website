document.addEventListener("DOMContentLoaded", () => {
    fetchDriverEarnings();
    fetchRideRequests();
});

// Fetch Driver Earnings from Backend
function fetchDriverEarnings() {
    fetch("backend/driver_earnings.php")
        .then(response => response.json())
        .then(data => {
            document.getElementById("total-earnings").textContent = `₹${data.earnings}`;
        })
        .catch(error => {
            console.error("Error fetching earnings:", error);
            document.getElementById("total-earnings").textContent = "Error loading";
        });
}

// Fetch Ride Requests from Backend
function fetchRideRequests() {
    fetch("backend/ride_requests.php")
        .then(response => response.json())
        .then(data => {
            const requestsContainer = document.getElementById("ride-requests");
            requestsContainer.innerHTML = ""; // Clear previous requests

            if (data.requests.length === 0) {
                requestsContainer.innerHTML = "<p>No ride requests available</p>";
                return;
            }

            data.requests.forEach(request => {
                const requestElement = document.createElement("div");
                requestElement.classList.add("ride-request");

                requestElement.innerHTML = `
                    <div>
                        <p><strong>Pickup:</strong> ${request.pickup}</p>
                        <p><strong>Drop-off:</strong> ${request.dropoff}</p>
                        <p><strong>Fare:</strong> ₹${request.fare}</p>
                    </div>
                    <div>
                        <button class="accept" onclick="acceptRide(${request.id})">Accept</button>
                        <button class="reject" onclick="rejectRide(${request.id})">Reject</button>
                    </div>
                `;

                requestsContainer.appendChild(requestElement);
            });
        })
        .catch(error => {
            console.error("Error fetching ride requests:", error);
            document.getElementById("ride-requests").textContent = "Error loading ride requests";
        });
}

// Accept Ride Request
function acceptRide(rideId) {
    fetch(`backend/ride_action.php?action=accept&id=${rideId}`)
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchRideRequests(); // Refresh ride requests
        })
        .catch(error => console.error("Error accepting ride:", error));
}

// Reject Ride Request
function rejectRide(rideId) {
    fetch(`backend/ride_action.php?action=reject&id=${rideId}`)
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchRideRequests(); // Refresh ride requests
        })
        .catch(error => console.error("Error rejecting ride:", error));
}
