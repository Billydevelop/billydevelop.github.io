document.getElementById("calculate-retirement").addEventListener("click", function() {
    // Get input values and format them
    const salaryInput = document.getElementById("salary");
    const years = document.getElementById("years").value;

    // Format salary value and remove any non-numeric characters
    let salary = formatCurrency(salaryInput.value.replace(/[^0-9]/g, ''));

    // Ensure salary and years are valid
    if (!salary || isNaN(years) || years <= 0) {
        alert("모든 필드를 올바르게 입력해주세요.");
        return;
    }

    // Calculate retirement amount (example: 1 month's salary * years worked)
    const retirementAmount = salary * years;

    // Display the result
    document.getElementById("retirement-output").innerText = `예상 퇴직금: ${formatCurrency(retirementAmount)} 원`;
});

// Function to format numbers with commas
function formatCurrency(value) {
    value = Number(value);
    return value.toLocaleString();  // Format number with commas
}
