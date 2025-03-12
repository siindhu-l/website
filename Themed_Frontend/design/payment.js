document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("paymentForm");
    
    if (paymentForm) {
        paymentForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            const paymentDetails = document.getElementById("paymentDetails").value;
            
            if (paymentDetails.trim() === "") {
                alert("Please enter your payment details.");
                return;
            }
            
            alert("Payment method saved successfully!");
            window.location.href = "ride_confirmation.html";
        });
    }
});
