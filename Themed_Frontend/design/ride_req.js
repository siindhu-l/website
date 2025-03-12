document.addEventListener("DOMContentLoaded", function () {
    // Simulated ride request data (in a real app, fetch from backend)
    fetchRideRequest();

    document.querySelector(".accept-btn").addEventListener("click", () => handleRequest("accepted"));
    document.querySelector(".decline-btn").addEventListener("click", () => handleRequest("declined"));
});

function fetchRideRequest() {
    fetch("http://localhost:3000/ride-request")
        .then(response => response.json())
        .then(data => {
            document.querySelector(".request-details").innerHTML = `
                <p><strong>Pickup:</strong> ${data.pickup}</p>
                <p><strong>Destination:</strong> ${data.destination}</p>
                <p><strong>Estimated Fare:</strong> $${data.fare}</p>
            `;
        })
        .catch(error => console.error("Error fetching ride request:", error));
}

function handleRequest(action) {
    fetch("http://localhost:3000/ride-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: action })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("responseMessage").innerText = data.message;
    })
    .catch(error => console.error("Error:", error));
}
