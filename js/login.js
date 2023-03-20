document.getElementById('btn-submit').addEventListener('click', function(){
    let emailField = document.getElementById('user-email');
    let email = emailField.value;

    let passwordField = document.getElementById('user-password');
    let password = passwordField.value;

    if (email === "user@simple.com" && password === "simpleuser") {
        window.location.href = 'bank.html';
    }
    else {
        alert("Sorry!! Invalid Information. Please enter correct information.")
    }
})