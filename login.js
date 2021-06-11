const userName = document.querySelector('#user-name');
const submitName = document.querySelector('#submit-name');

submitName.addEventListener('click', function (event) {
  event.preventDefault();
  console.dir(userName);
  const nameValue = userName.value;
  console.log(nameValue);
});
