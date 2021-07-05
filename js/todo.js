const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('#todo-input');

function addTodo(newTodo) {
  console.log(newTodo);
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = newTodo;
  todoList.appendChild(li);
}

function delTodo() {}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ``;
  addTodo(newTodo);
});
