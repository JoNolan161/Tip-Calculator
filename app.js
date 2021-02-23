function validateForm() {
    let msg = "";
    const bill = document.querySelector('.bill-amount').value;
    const tip = document.querySelector('.tip-amount').value;
    let fields = [bill, tip];

    for (var i = 0; i < fields.length; i++) {
        if (fields[i] == '') {
            msg = alert("Please fill in all fields");
        } else {
            calcTips();
        }
    }
    document.querySelector('#tipCalc').reset();

}

const button = document.querySelector('#submit');
button.addEventListener('click', validateForm);

function calcTips() {
    let amount = parseInt(document.querySelector('.bill-amount').value);
    let tip = parseInt(document.querySelector('.tip-amount').value);
    let result = (amount * tip) / 100 + amount;
    let total = document.querySelector('.total');
    total.textContent = `Total payment: £${result.toFixed(2)}`;

}