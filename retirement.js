// 퇴직금 계산기
document.getElementById("calculate-retirement").addEventListener("click", function() {
    // 입력값을 가져오기 전에 null 체크를 추가합니다.
    const years = parseInt(document.getElementById("years").value);
    const salary = parseInt(document.getElementById("salary").value);
    
    // 숫자 입력값을 제대로 받았는지 확인
    if (isNaN(years) || isNaN(salary)) {
        alert("모든 필드를 올바르게 입력해주세요.");
        return;
    }

    // 퇴직금 계산 (예시: 1개월 급여 × 근속 연수)
    const retirementPay = salary * 1 * years; // 급여 * 1 * 근속 연수
    document.getElementById("retirement-result").innerText = `퇴직금: ${retirementPay.toLocaleString()} 원`;

    // 세부 계산식 보여주기
    document.getElementById("retirement-details").innerText = `퇴직금 = (평균 월 급여 ${salary} 원 × 1) × 근속 연수 ${years} 년`;
});
