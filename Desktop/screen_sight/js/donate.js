document.addEventListener("DOMContentLoaded", function () {
    const raisedAmount = 20500;  // Amount raised so far
    const goalAmount = 250000;   // Total goal

    // Calculate percentage of goal reached
    const progressPercentage = (raisedAmount / goalAmount) * 100;

    // Select the progress bar and update it
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = progressPercentage + "%";
    progressBar.textContent = `${progressPercentage.toFixed(1)}% raised`;

    // Update donation goal text
    document.getElementById("raised-amount").textContent = `$${raisedAmount.toLocaleString()}`;
});
