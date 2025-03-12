document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.querySelector(".calculate-btn");
    const totalEarningsDisplay = document.getElementById("totalEarnings");

    calculateButton.addEventListener("click", function () {
        let trips = parseInt(document.getElementById("trips").value) || 0;
        let earningsPerTrip = parseFloat(document.getElementById("earnings").value) || 0;
        let bonuses = parseFloat(document.getElementById("bonuses").value) || 0;

        let totalEarnings = (trips * earningsPerTrip) + bonuses;
        
        totalEarningsDisplay.innerText = `Total Earnings: $${totalEarnings.toFixed(2)}`;
    });
});
