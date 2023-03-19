document.getElementById('btn-deposit').addEventListener('click', function(){
    let depositField = document.getElementById('deposit-field');
    let depositAmount = depositField.value;
    
    let depositTotalElement = document.getElementById('deposit-amount');
    let depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

    depositField.value = '';
})