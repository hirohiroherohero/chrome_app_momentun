const loginSection = document.getElementById("login-section");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const greeting = document.getElementById("greething");
const MomentumSection = document.getElementById("momentum-section");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginSection.classList.add(HIDDEN_CLASSNAME);
  document.body.classList.add("lock");

  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);

  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}.`;
  MomentumSection.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginSection.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  loginSection.classList.add(HIDDEN_CLASSNAME);
  document.body.classList.add("lock");
}
