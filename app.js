const select = document.querySelector('.form-select');
const repayment = document.querySelector('#repayment');
const amount = document.querySelector('#amount');
const calculateBtn = document.querySelector('.btn-dark');

let rate = 0;
let installment = 0;

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (select.value === 'Housing Loan') {
        rate = 1.29;
    } else if (select.value === 'Personal Loan') {
        rate = 1.99;
    } else if (select.value === 'Auto Loan') {
        rate = 1.79;
    }
    if (!select.value || !repayment.value || !amount.value) {
        alert('Please enter loan type, repayment and amount')
    }
    const interest = rate / 100;
    installment = 
      (amount.value * (interest * (1 + interest) ** repayment.value)) / ((1 + interest) ** repayment.value - 1);
     
    showResults();
});

const showResults = () => {
    const results = document.querySelector('.results');

    results.innerHTML = `
    <h2 class="mt-3 text-warning">Loan Information</h2>
    <table class="table table-bordered border-warning  mt-4">
     <tbody>
      <tr>
        <th>Loan Amount</th>
        <td>$ ${amount.value} </td>
        <th>Loan Type</th>
        <td>${select.value}</td>
      </tr>
      <tr>
        <th>Repayment</th>
        <td>${repayment.value}</td>
        <th>Interest Rate</th>
        <td>${rate}</td>
      </tr>
      <tr>
        <th>Total Amount</th>
        <td>$ ${(installment * repayment.value).toFixed(2)} </td>
        <th>Installment Amount</th>
        <td>$ ${installment.toFixed(2)} </td>
      </tr>
    </tbody>
  </table>
    `
}