document.getElementById('btn-submit').addEventListener('click', function(){
    let emailField = document.getElementById('user-email');
    let email = emailField.value;
    console.log(email);
    let passwordField = document.getElementById('user-password');
    let password = passwordField.value;
    console.log(password);
})