document.getElementById("calculate-pension").addEventListener("click", function() {
    const averageSalaryInput = document.getElementById("average-salary").value;
    const yearsContributed = document.getElementById("years-contributed").value;
    
    // Remove commas and validate input
    let averageSalary = formatCurrency(averageSalaryInput);
    yearsContributed = parseInt(yearsContributed); // Convert years to an integer

    // Check if inputs are valid
    if (isNaN(averageSalary) || isNaN(yearsContributed) || averageSalary <= 0 || yearsContributed <= 0) {
        alert("올바른 값을 입력하세요.");
        return;
    }

    // Calculate pension amount
    const pensionAmount = (averageSalary * 0.05) * yearsContributed;

    // Display result
    document.getElementById("pension-output").innerText = `예상 연금액: ${formatCurrency(pensionAmount)} 원`;
});
