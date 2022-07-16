const localLogin = document.querySelector("#local_login");
const btnLogout = document.querySelector(".btn_logout");
const PASSWORD_KEY = "password";


function loginSubmit(event) {
    event.preventDefault();
    localLogin.classList.add("hide");
    const loginInput = document.querySelector("#input_login");
    localStorage.setItem(PASSWORD_KEY, loginInput);
    addGreetings(loginInput);
}

function addGreetings() {
    btnLogout.innerText = "로그아웃";
    btnLogout.classList.remove("hide");
}

const saveUserPassword = localStorage.getItem("password");

if (saveUserPassword === null) {
    localLogin.classList.remove("hide");
    btnLogout.classList.add("hide");
    localLogin.addEventListener("submit", loginSubmit);
} else {
    addGreetings();
}

function itemRemove() {
    localStorage.removeItem(PASSWORD_KEY);
    localLogin.classList.remove("hide");
    btnLogout.classList.add("hide");
}

btnLogout.addEventListener("click", itemRemove);