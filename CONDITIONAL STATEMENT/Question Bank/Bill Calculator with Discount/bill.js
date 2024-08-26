function calculateBill() {
    const amount = parseFloat(document.getElementById('amount').value);
    const discount = parseFloat(document.getElementById('discount').value);
    let total;

    if (isNaN(amount) || isNaN(discount) || amount < 0 || discount < 0) {
        total = 'Invalid input. Please enter positive numbers.';
    } else {
        total = amount - (amount * discount / 100);
    }

    document.getElementById('result').innerText = `Total Bill: ${total.toFixed(2)}`;
}
