let principle = 0
let startingPrinciple = 0
let length = 0
let rate = 0
let monthlyRate = 0
let mortgagePayment = 0
let loanPayment = 0
let totalInterest = 0

function runCalc() {
  principle = document.getElementById('principle-input').value
  length = document.getElementById('length-input').value
  rate = document.getElementById('rate-input').value

  if (principle == '' || length == '' || rate == '') {
    throw 'Need a value'
  } else {
    length *= 12
    rate = rate / 100 / 12
    startingPrinciple = principle
    mortgagePayment =
      principle /
      ((Math.pow(1 + rate, length) - 1) / (rate * Math.pow(1 + rate, length)))

    for (let i = 1; i <= length; ++i) {
      let interestPayment = principle * rate
      let principlePayment = mortgagePayment - interestPayment
      principle -= principlePayment
      totalInterest += interestPayment
      buildTable(i, interestPayment, principlePayment)
    }
  }
}

function buildTable(i, interestPayment, principlePayment) {
  let lastRow = document.getElementById('table').rows.length
  let table = document.getElementById('table')
  let row = table.insertRow(lastRow)
  let monthCell = row.insertCell(0)
  let interestCell = row.insertCell(1)
  let principleCell = row.insertCell(2)
  let balanceCell = row.insertCell(3)

  monthCell.innerHTML = i
  interestCell.innerHTML = interestPayment.toFixed(2)
  principleCell.innerHTML = principlePayment.toFixed(2)
  balanceCell.innerHTML = principle.toFixed(2)
}
