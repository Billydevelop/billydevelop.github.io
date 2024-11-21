document.getElementById("calculate-pension").addEventListener("click", function() {
    const averageSalaryInput = document.getElementById("average-salary").value;
    const yearsContributed = document.getElementById("years-contributed").value;
    
    // 금액에서 쉼표를 제거하고 숫자로 변환
    let averageSalary = formatCurrency(averageSalaryInput);
    yearsContributed = parseInt(yearsContributed); // 연도는 정수로 변환

    // 유효성 검사
    if (isNaN(averageSalary) || isNaN(yearsContributed) || averageSalary <= 0 || yearsContributed <= 0) {
        alert("올바른 값을 입력하세요.");
        return;
    }

    // 계산식: 예상 연금액 = (현재 월 급여 × 5%) × 납부 기간
    let pensionAmount = (averageSalary * 0.05) * yearsContributed;

    // 소수점 절삭
    pensionAmount = Math.floor(pensionAmount); // 소수점 아래 버리기

    // 결과 출력
    document.getElementById("result-output").innerText = `예상 연금액: ${formatCurrency(pensionAmount)} 원`;
    document.getElementById("pension-details").style.display = "block"; // 세부 계산 보이기
});

// 숫자에서 쉼표를 제거하고 숫자 값만 반환하는 함수
function formatCurrency(value) {
    // 쉼표 제거 후 숫자로 변환
    value = value.replace(/[^0-9.-]+/g, ''); 
    return Number(value);
}
