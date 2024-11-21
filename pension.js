// 국민연금 예상 수령액 계산기
document.getElementById("calculate-pension").addEventListener("click", function() {
    const age = parseInt(document.getElementById("age").value);
    const averageSalary = formatCurrency(document.getElementById("average-salary").value);
    const yearsOfContribution = parseInt(document.getElementById("years-of-contribution").value);
    
    // Validate inputs
    if (isNaN(age) || isNaN(averageSalary) || isNaN(yearsOfContribution)) {
        alert("모든 필드를 올바르게 입력해주세요.");
        return;
    }

    // Calculate pension (example formula)
    const monthlyPension = (averageSalary * 0.05 * yearsOfContribution) / 12;
    
    // Display the result with formatted currency
    document.getElementById("pension-result").innerText = `예상 월 연금액: ${formatCurrency(monthlyPension)} 원`;

    // Show the calculation formula
    document.getElementById("pension-details").innerText = `국민연금 예상 월 연금액 = (평균 급여 ${averageSalary} 원 × 5%) × 납부 연수 ${yearsOfContribution} 년 / 12`;
});

// Function to format currency with commas and append '원'
function formatCurrency(value) {
    // Remove any non-numeric characters before formatting
    value = value.replace(/[^0-9]/g, '');
    return Number(value).toLocaleString();
}
