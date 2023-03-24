document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    //Getting Value from Input Field
    let withdrawField = document.getElementById('withdraw-field');
    let withdrawFieldElement = withdrawField.value;
    let withdrawFieldElementNumeric = parseFloat(withdrawFieldElement);

    // Empty Field
    withdrawField.value = '';

    // Getting innerText from Element
    let withdrawCurrent = document.getElementById('withdraw-amount');
    let withdrawCurrentElement = withdrawCurrent.innerText;
    let withdrawCurrentElementNumeric = parseFloat(withdrawCurrentElement);


})