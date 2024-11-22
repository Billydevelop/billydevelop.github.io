document.getElementById("calculate-retirement").addEventListener("click", function() {
    const averageSalaryInput = document.getElementById("average-salary").value;
    let yearsWorked = document.getElementById("years-worked").value;

    // 금액에서 쉼표를 제거하고 숫자로 변환
    let averageSalary = formatCurrency(averageSalaryInput);
    yearsWorked = parseInt(yearsWorked); // 근속 연수는 정수로 변환

    // 유효성 검사
    if (isNaN(averageSalary) || isNaN(yearsWorked) || averageSalary <= 0 || yearsWorked <= 0) {
        alert("올바른 값을 입력하세요.");
        return;
    }

    // 퇴직금 계산 공식: 퇴직금 = (평균 월 급여 × 1) × 근속 연수
    let retirementPay = (averageSalary * 1) * yearsWorked;

    // 소수점 절삭
    retirementPay = Math.floor(retirementPay); // 소수점 아래 버리기

    // 결과 출력
    document.getElementById("retirement-result").innerText = `예상 퇴직금: ${formatCurrency(retirementPay)} 원`;
    document.getElementById("retirement-details").style.display = "block"; // 세부 계산 보이기
});

// 숫자에서 쉼표를 제거하고 숫자 값만 반환하는 함수
function formatCurrency(value) {
    // 쉼표 제거 후 숫자로 변환
    value = value+"".replace(/[^0-9.-]+/g, ''); 
    return Number(value);
}

