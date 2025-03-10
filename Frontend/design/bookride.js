document.getElementById('ride-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let pickup = document.getElementById('pickup-location').value;
    let dropoff = document.getElementById('dropoff-location').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    if (pickup && dropoff && date && time) {
        alert(`Your ride is booked!\nPickup: ${pickup}\nDropoff: ${dropoff}\nDate: ${date}\nTime: ${time}`);
    } else {
        alert("Please fill in all details.");
    }
});
