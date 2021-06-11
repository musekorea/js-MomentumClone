const loginForm = document.querySelector('#login-form');

const userName = document.querySelector('#user-name');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameValue = userName.value;
  console.log(nameValue);
});
