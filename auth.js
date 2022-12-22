var username = document.forms['login_form']['username'];
var password = document.forms['login_form']['password'];

var user_err = document.getElementById('user_err');
var pass_err = document.getElementById('pass_err');

username.addEventListener('textInput', user_verify);
password.addEventListener('textInput', pass_verify);

function authenticate(){
    if(username.value.length < 8){
        username.style.border = "1px solid red";
        user_err.style.display = "block";
        username.focus();
        return false; 
    }

    if(password.value.length < 6){
        password.style.border = "1px solid red";
        pass_err.style.display = "block";
        password.focus();
        return false;
    }

}

function user_verify(){
    if(username.value.length >= 7){
        username.style.border = "1px solid silver";
        user_err.style.display = "none";
        return true;
    }
}

function pass_verify(){
    if(password.value.length >= 5){
        password.style.border = "1px solid silver";
        pass_err.style.display = "none";
        return true;
    }

}