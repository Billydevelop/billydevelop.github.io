document.getElementById("calculate-pension").addEventListener("click", function () {
    const averageSalaryInput = document.getElementById("average-salary").value.replace(/,/g, "");
    const yearsContributedInput = parseInt(document.getElementById("years-contributed").value);
  
    if (!averageSalaryInput || !yearsContributedInput || yearsContributedInput <= 0) {
      alert("유효한 값을 입력해주세요.");
      return;
    }
  
    const averageSalary = parseInt(averageSalaryInput);
    const basePension = 0.017 * averageSalary * yearsContributedInput; // 예상 연금 계산 공식
  
    document.getElementById("result-output").innerText =
      `예상 국민연금 수령액: ${basePension.toLocaleString()} 원`;
  });
  