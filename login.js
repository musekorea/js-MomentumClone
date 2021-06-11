const loginForm = document.querySelector('#login-form');
const userName = document.querySelector('#user-name');
const greeting = document.querySelector('#greeting');
const localStorageUserName = localStorage.getItem('username');

if (localStorageUserName === null) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', login);
} else {
  greeting.classList.remove('hidden');
  greeting.textContent = `Hello ${localStorageUserName}`;
}

function login(event) {
  event.preventDefault();
  const nameValue = userName.value;
  loginForm.classList.add('hidden');
  localStorage.setItem('username', nameValue);
  greeting.classList.remove('hidden');
  greeting.textContent = `Hello ${nameValue}`;
}
