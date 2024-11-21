document.getElementById("calculate-pension").addEventListener("click", function() {
    // Get input values and format them
    const averageSalaryInput = document.getElementById("average-salary");
    const yearsContributed = document.getElementById("years-contributed").value;

    // Format the salary input value and remove any non-numeric characters
    let averageSalary = formatCurrency(averageSalaryInput.value.replace(/[^0-9]/g, ''));

    // Ensure the salary and yearsContributed are valid
    if (!averageSalary || isNaN(yearsContributed) || yearsContributed <= 0) {
        alert("모든 필드를 올바르게 입력해주세요.");
        return;
    }

    // Calculate the expected pension (for example, 5% of the average salary * contribution years)
    const pensionAmount = (averageSalary * 0.05) * yearsContributed;

    // Display the result
    document.getElementById("result-output").innerText = `예상 연금액: ${formatCurrency(pensionAmount)} 원`;
    document.getElementById("pension-details").innerText = `예상 연금액 = (현재 월 급여 ${formatCurrency(averageSalary)} 원 × 5%) × 납부 기간 ${yearsContributed} 년`;
});

// Function to format numbers with commas
function formatCurrency(value) {
    // Ensure the input is a valid number
    value = Number(value);
    return value.toLocaleString();  // Format number with commas
}
