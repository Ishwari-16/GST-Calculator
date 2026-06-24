function calculateGST() {

    const amount = parseFloat(document.getElementById("amount").value);
    const gstRate = parseFloat(document.getElementById("gstRate").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const gstAmount = (amount * gstRate) / 100;
    const totalAmount = amount + gstAmount;

    document.getElementById("gstAmount").textContent =
        "₹" + gstAmount.toFixed(2);

    document.getElementById("totalAmount").textContent =
        "₹" + totalAmount.toFixed(2);
}