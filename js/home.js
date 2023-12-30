var nameInput = document.getElementById("nameInput");
var addWelcome = document.querySelector(".welcoming-tittle");


var userName = localStorage.getItem("userName")
console.log(userName);
addWelcome.innerHTML = "Welcome " + userName;

document.getElementById("logout-btn").addEventListener('click', function () {
    window.location = './index.html';
    localStorage.removeItem('userName')
})

