var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var signUpbBtn = document.getElementById("sign-Up-btn");
var box = document.querySelector(".box");



var userInformation = [];


if (localStorage.getItem("users") != null) {
    userInformation=JSON.parse(localStorage.getItem("users"));
}




function signUp() {
    if (validationName() == true && validationEmail() == true && validationPassword() == true) {
        if (isExist() == true) {
            document.querySelector('.resign').classList.remove('d-none');
        }
        else {
            var userInfo = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            };
                userInformation.push(userInfo);
                
            localStorage.setItem("users",JSON.stringify(userInformation));
            clear();
            passwordInput.classList.remove("is-valid");
            nameInput.classList.remove("is-valid");
            emailInput.classList.remove("is-valid");
        }
            
        }
        
    else {
        box.classList.remove("d-none");
    }
   
    


    /* if (nameInput.value=="" && emailInput.value=="" &&passwordInput.value=="") {
        document.querySelector('.d-none').classList.remove('d-none');
    }
    else {
        document.querySelector('.d-none').classList.add('d-none');
        
    } */
    console.log(userInformation);

}

function isExist() {
    for (var i = 0; i< userInformation.length; i++) {
        if (userInformation[i].email.toLowerCase() ==emailInput.value.toLowerCase()) {
            return true; 
        }
        
    }
}


signUpbBtn.addEventListener("click", signUp);

function clear() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

nameInput.addEventListener('input', function () {
    validationName();
})

function validationName() {

    var regexName = /^[\w ]{3,20}$/;
    if (regexName.test(nameInput.value) == true) {
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
        return true;
    }
    else {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        return false;
    }
    
}

emailInput.addEventListener('input', function () {
    validationEmail();
})

function validationEmail() {

    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(emailInput.value) == true) {
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        return true;
    }
    else {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        return false;
    }
    
}


passwordInput.addEventListener('input', function () {
    validationPassword();
})

function validationPassword() {

    var regexPassword = /^[A-Z]\w{7,}$/;
    if (regexPassword.test(passwordInput.value) == true) {
        passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
        return true;
    }
    else {
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        return false;
    }
    
}

box.addEventListener("click", closeBox);
function closeBox() {
    box.classList.add("d-none");
}