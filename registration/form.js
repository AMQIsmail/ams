
document.getElementById("reg-div").addEventListener("click", regBlock);
function regBlock() {
    document.getElementById("register-div").style.display="block";
    document.getElementById('login-div').style.display='none';
}


document.getElementById("log-div").addEventListener("click", logBlock);
function logBlock() {
    document.getElementById("register-div").style.display="none";
    document.getElementById('login-div').style.display='block';
}