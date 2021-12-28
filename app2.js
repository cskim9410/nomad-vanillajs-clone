const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");


const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(username)
}

function paintGreetings(tomato) {
    greeting.innerText=`Hello ${tomato}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onSubmit)
} else {
    paintGreetings(savedUsername)
}


