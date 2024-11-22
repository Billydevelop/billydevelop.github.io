document.getElementById("calculate-pension").addEventListener("click", function() {
    // 금액과 납입 기간 입력 값 가져오기
    const averageSalaryInput = document.getElementById("average-salary").value;
    let yearsContributed = document.getElementById("years-contributed").value;

    // 금액에서 쉼표를 제거하고 숫자로 변환
    let averageSalary = formatCurrency(averageSalaryInput);
    yearsContributed = parseInt(yearsContributed); // 납입 기간은 정수로 변환

    // 유효성 검사
    if (isNaN(averageSalary) || isNaN(yearsContributed) || averageSalary <= 0 || yearsContributed <= 0) {
        alert("올바른 값을 입력하세요.");
        return;
    }

    // 연금액 계산 공식: 연금액 = (평균 월 급여 × 5%) × 납부 기간
    let pensionAmount = (averageSalary * 0.05) * yearsContributed;

    // 소수점 절삭
    pensionAmount = Math.floor(pensionAmount); // 소수점 아래 버리기

    // 결과 출력
    document.getElementById("pension-result").innerText = `예상 연금액: ${formatCurrency(pensionAmount)} 원`;
    document.getElementById("pension-details").style.display = "block"; // 세부 계산 보이기
});

// 숫자에서 쉼표를 제거하고 숫자 값만 반환하는 함수
function formatCurrency(value) {
    // value가 숫자일 경우 문자열로 변환 후 쉼표 제거
    value = String(value).replace(/[^0-9.-]+/g, '');
    return Number(value);
}
