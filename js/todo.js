const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('#todo-input');

function deleteTodo(e) {
  const li = e.target.parentNode;
  li.remove();
}

function addTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = `${newTodo} `;
  const btn = document.createElement('button');
  btn.innerText = `🧺`;
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
  btn.addEventListener('click', deleteTodo);
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ``;
  addTodo(newTodo);
});
