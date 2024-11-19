// 소득세 누진세율 (2024 기준)
const incomeTaxRates = [
    { threshold: 12000000, rate: 0.06 }, // 1,200만 원 이하
    { threshold: 46000000, rate: 0.15 }, // 4,600만 원 이하
    { threshold: 88000000, rate: 0.24 }, // 8,800만 원 이하
    { threshold: 150000000, rate: 0.35 }, // 1억 5,000만 원 이하
    { threshold: 300000000, rate: 0.38 }, // 3억 원 이하
    { threshold: Infinity, rate: 0.40 }, // 초과
  ];
  
  // 금액 형식으로 변환하는 함수
  function formatCurrency(number) {
    return new Intl.NumberFormat('ko-KR').format(Math.floor(number)) + ' 원';
  }
  
  // 입력값에서 쉼표 제거
  function parseInput(value) {
    return parseInt(value.replace(/,/g, ''), 10) || 0;
  }
  
  // 소득세 계산 함수
  function calculateIncomeTax(taxBase) {
    if (taxBase <= 0) return 0; // 과세소득이 없으면 소득세 0원
    let tax = 0;
    let remainingIncome = taxBase;
  
    for (let i = 0; i < incomeTaxRates.length; i++) {
      const { threshold, rate } = incomeTaxRates[i];
      const previousThreshold = i === 0 ? 0 : incomeTaxRates[i - 1].threshold;
  
      if (remainingIncome > threshold) {
        tax += (threshold - previousThreshold) * rate;
      } else {
        tax += (remainingIncome - previousThreshold) * rate;
        break;
      }
    }
  
    return Math.floor(tax); // 소수점 제거
  }
  
  // 지방소득세 계산 (소득세의 10%)
  function calculateLocalTax(incomeTax) {
    return Math.floor(incomeTax * 0.1);
  }
  
  // 입력값 실시간 쉼표 추가
  document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('input', () => {
      const value = parseInput(input.value);
      if (!isNaN(value)) {
        input.value = value.toLocaleString('ko-KR');
      }
    });
  });
  
  // 계산 버튼 클릭 이벤트
  document.getElementById('calculate-btn').addEventListener('click', function () {
    const salaryType = document.getElementById('salary-type').value;
    const salary = parseInput(document.getElementById('salary').value);
    const nonTaxable = parseInput(document.getElementById('non-taxable').value);
    const dependents = parseInt(document.getElementById('dependents').value, 10);
    const children = parseInt(document.getElementById('children').value, 10);
  
    if (isNaN(salary) || salary <= 0) {
      alert("올바른 급여 금액을 입력하세요.");
      return;
    }
  
    const rates = {
      국민연금: 0.045,
      건강보험: 0.03545,
      고용보험: 0.009,
    };
  
    const grossMonthlySalary = salaryType === 'annual' ? salary / 12 : salary;
    const taxableIncome = grossMonthlySalary - nonTaxable;
  
    const pension = Math.floor(taxableIncome * rates.국민연금);
    const health = Math.floor(taxableIncome * rates.건강보험);
    const employment = Math.floor(taxableIncome * rates.고용보험);
  
    const basicDeduction = 150000;
    const taxBase = Math.max(0, taxableIncome - (dependents * basicDeduction));
    const incomeTax = calculateIncomeTax(taxBase);
    const localTax = calculateLocalTax(incomeTax);
  
    const totalDeductions = pension + health + employment + incomeTax + localTax;
    const netSalary = Math.floor(grossMonthlySalary - totalDeductions);
  
    // 결과 표시
    document.getElementById('result-output').innerHTML = `
      <strong>실수령액:</strong> ${formatCurrency(netSalary)}<br>
      <p>(모든 소수점 값은 절삭되었습니다.)</p>
    `;
  
    // 세부 계산 표시
    document.getElementById('calculation-details').innerHTML = `
      <strong>세부 계산:</strong><br>
      과세소득 = ${formatCurrency(grossMonthlySalary)} - ${formatCurrency(nonTaxable)}<br>
      4대보험 공제 = ${formatCurrency(pension)} (국민연금) + 
                     ${formatCurrency(health)} (건강보험) + 
                     ${formatCurrency(employment)} (고용보험)<br>
      소득세 = ${formatCurrency(incomeTax)}<br>
      지방소득세 = ${formatCurrency(localTax)}<br>
      총 공제액 = ${formatCurrency(totalDeductions)}<br>
    `;
  });
