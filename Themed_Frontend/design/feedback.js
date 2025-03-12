document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
        star.addEventListener("click", () => rateRide(index + 1));
    });

    document.querySelector("button").addEventListener("click", submitFeedback);
});

function rateRide(rating) {
    let feedbackMessage = "Thank you for your feedback!";
    document.getElementById("rating-feedback").innerText = `You rated this ride: ${rating} stars. ${feedbackMessage}`;

    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    });
}

function submitFeedback() {
    const rating = document.querySelectorAll(".star.filled").length;
    const comments = document.getElementById("comments").value.trim();

    if (rating === 0 || comments === "") {
        alert("Please provide both a rating and comments.");
        return;
    }

    const feedbackData = { rating, comments };

    fetch("http://localhost:3000/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById("comments").value = ""; // Clear input after submission
        document.getElementById("rating-feedback").innerText = "Please rate your ride experience.";
        document.querySelectorAll(".star").forEach(star => star.classList.remove("filled"));
    })
    .catch(error => console.error("Error submitting feedback:", error));
}
