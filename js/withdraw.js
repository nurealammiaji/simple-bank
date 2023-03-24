document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    //Getting Value from Input Field
    let withdrawField = document.getElementById('withdraw-field');
    let withdrawFieldElement = withdrawField.value;
    let withdrawFieldElementNumeric = parseFloat(withdrawFieldElement);

    withdrawField.value = '';


})