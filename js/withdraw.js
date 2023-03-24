document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    //Getting Value from Input Field
    let withdrawField = document.getElementById('withdraw-field');
    let withdrawFieldElement = withdrawField.value;
    let withdrawFieldElementNumeric = parseFloat(withdrawFieldElement);

    // Empty Field
    withdrawField.value = '';

    // Getting innerText from Withdraw
    let withdrawCurrent = document.getElementById('withdraw-amount');
    let withdrawCurrentElement = withdrawCurrent.innerText;
    let withdrawCurrentElementNumeric = parseFloat(withdrawCurrentElement);

    // Withdraw Calculation
    let oldWithdraw = withdrawCurrentElementNumeric;
    let newWithdraw = withdrawFieldElementNumeric;
    let newWithdrawTotal = oldWithdraw + newWithdraw;

    withdrawCurrent.innerText = newWithdrawTotal;

    // Getting innerText from Balance
    let balanceCurrentReloaded = document.getElementById('balance-amount');
    let balanceCurrentReloadedAmount = balanceCurrentReloaded.innerText;
    let balanceCurrentReloadedAmountNumeric = parseFloat(balanceCurrentReloadedAmount);

    // Balance Calculation
    let oldBalanceReloaded = balanceCurrentReloadedAmountNumeric;
    let newBalanceReloaded = oldBalanceReloaded - newWithdraw;
    balanceCurrentReloaded.innerText = newBalanceReloaded;

})