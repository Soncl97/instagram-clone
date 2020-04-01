const loginBtn = document.getElementById("loginBtn");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");

loginBtn.disabled = true;

function ableBtn() {
    const passwordVal = password.value;
    const rePasswordVal = rePassword.value;

    if((passwordVal.length > 0) && (rePasswordVal.length > 0)) {
        loginBtn.disabled = false;
        loginBtn.setAttribute("style", "background-color: #1b91fa");
    } else {
        loginBtn.disabled = true;
        loginBtn.setAttribute("style", "background-color: #c5e1fa");
    }
};

password.addEventListener("keyup", function() {
    ableBtn()
});

rePassword.addEventListener("keyup", function() {
    ableBtn()
});