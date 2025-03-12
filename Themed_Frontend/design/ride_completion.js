document.addEventListener("DOMContentLoaded", function () {
    function submitFeedback() {
        const feedback = confirm("Would you like to provide feedback for your ride?");
        
        if (feedback) {
            const rating = prompt("Please rate your ride from 1 to 5 stars:");
            
            if (rating >= 1 && rating <= 5) {
                alert(`Thank you for your feedback! You rated us ${rating} stars ⭐`);
            } else {
                alert("Invalid rating. Please enter a number between 1 and 5.");
            }
        } else {
            alert("Thank you for riding with us! Have a great day.");
        }
    }

    // Attach event listener to button
    document.querySelector("button").addEventListener("click", submitFeedback);
});
