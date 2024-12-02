const $ = (selector) => document.querySelector(selector);

const makeChange = (amount) => {
    const quarters = Math.floor(amount / 25);
    amount %= 25;
    const dimes = Math.floor(amount / 10);
    amount %= 10;
    const nickels = Math.floor(amount / 5);
    const pennies = amount % 5;

    $("#quarters").textContent = quarters;
    $("#dimes").textContent = dimes;
    $("#nickels").textContent = nickels;
    $("#pennies").textContent = pennies;
};

const processEntry = () => {
    const change = parseInt($("#change").value);

    if (isNaN(change) || change < 0 || change > 99) {
        alert("Please enter a valid number between 0 and 99.");
        $("#change").focus();
        return;
    }

    makeChange(change);
};

document.addEventListener("DOMContentLoaded", () => {
    $("#makeChange").addEventListener("click", processEntry);
    $("#change").focus();
});