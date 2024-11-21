document.getElementById("calculate-retirement").addEventListener("click", function () {
    const monthlySalaryInput = document.getElementById("monthly-salary").value.replace(/,/g, "");
    const yearsWorkedInput = parseInt(document.getElementById("years-worked").value);
  
    if (!monthlySalaryInput || !yearsWorkedInput || yearsWorkedInput <= 0) {
      alert("유효한 값을 입력해주세요.");
      return;
    }
  
    const monthlySalary = parseInt(monthlySalaryInput);
    const retirementPay = monthlySalary * yearsWorkedInput * 1 / 12; // 퇴직금 공식
  
    document.getElementById("result-output").innerText =
      `퇴직금: ${retirementPay.toLocaleString()} 원`;
  });
  