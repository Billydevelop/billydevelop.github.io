document.getElementById("calculate-retirement").addEventListener("click", function() {
    const salaryInput = document.getElementById("salary").value;
    const years = document.getElementById("years").value;
    
    // Remove commas and validate input
    let salary = formatCurrency(salaryInput);
    years = parseInt(years); // Convert years to an integer

    // Check if inputs are valid
    if (isNaN(salary) || isNaN(years) || salary <= 0 || years <= 0) {
        alert("올바른 값을 입력하세요.");
        return;
    }

    // Calculate retirement amount
    const retirementAmount = salary * years;

    // Display result
    document.getElementById("retirement-output").innerText = `예상 퇴직금: ${formatCurrency(retirementAmount)} 원`;
});
