var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var signInBtn = document.getElementById("sign-In-btn");

var userInformation = [];


if (localStorage.getItem("users") != null) {
    userInformation=JSON.parse(localStorage.getItem("users"));
}


function signIn() {
    if (isExist() == true) {
        window.location = './home.html'
    }
    else {
        document.querySelector(".invalid-login").classList.remove("d-none");
        signInBtn.classList.remove("mt-4");
    }
    clearForm();
}

function clearForm() {
    emailInput.value = "";
    passwordInput.value = "";
}

function isExist() {
    for (var i = 0; i < userInformation.length; i++) {
        if (userInformation[i].email == emailInput.value &&
        userInformation[i].password== passwordInput.value 
        ) {
            localStorage.setItem("userName",userInformation[i].name)
            return true
        }
        
    }
    return false;
}

signInBtn.addEventListener('click', signIn);
