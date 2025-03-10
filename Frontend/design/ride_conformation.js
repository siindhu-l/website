function updatePaymentIcon() {
    const paymentMethod = document.getElementById("payment-method").value;
    const paymentIcon = document.getElementById("payment-icon");

    if (paymentMethod === "credit" || paymentMethod === "debit") {
        paymentIcon.innerText = "💳";
    } else if (paymentMethod === "paypal") {
        paymentIcon.innerText = "🅿️";
    } else if (paymentMethod === "upi") {
        paymentIcon.innerText = "🏦";
    }
}

function confirmRide() {
    document.getElementById("confirmationMessage").innerText = "✅ Your ride has been confirmed!";
}
