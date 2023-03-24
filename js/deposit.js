// document.getElementById('btn-deposit').addEventListener('click', function(){
//     let depositField = document.getElementById('deposit-field');
//     let depositAmount = depositField.value;

//     let depositTotalElement = document.getElementById('deposit-amount');
//     let depositTotal = depositTotalElement.innerText;
//     depositTotalElement.innerText = depositAmount;

//     depositField.value = '';
// })

document.getElementById('btn-deposit').addEventListener('click', function(){
    
    // Getting Value from Input Field
    let depositField = document.getElementById('deposit-field');
    let depositElement = depositField.value;
    let depositElementNumeric = parseFloat(depositElement);
    
    //Deposit Field Empty
    depositField.value = '';

    // Getting innerText from Element
    let depositCurrent = document.getElementById('deposit-amount');
    let depositCurrentAmount = depositCurrent.innerText;
    let depositCurrentNumeric = parseFloat(depositCurrentAmount);
    
    // Deposit Calculation
    let oldDeposit = depositCurrentNumeric;
    let newDeposit = depositElementNumeric;
    let newDepositTotal = oldDeposit + newDeposit;

    depositCurrent.innerText = newDepositTotal;

    // Balance Calculation
    let balanceCurrent = document.getElementById('balance-amount');
    let balanceCurrentAmount = balanceCurrent.innerText;
    let balanceCurrentAmountNumeric = parseFloat(balanceCurrentAmount);
    
    let oldBalance = balanceCurrentAmountNumeric;
    let newBalance = oldBalance + newDeposit;
    balanceCurrent.innerText = newBalance;
})

document.getElementById('btn-logout').addEventListener('click', function(){
    window.location.href = 'index.html';
})