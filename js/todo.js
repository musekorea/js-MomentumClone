const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('#todo-input');

let todos = [];

function deleteTodo(e) {
  const li = e.target.parentNode;
  li.remove();
}

function addTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = `${newTodo} `;
  const btn = document.createElement('button');
  btn.innerText = `๐งบ`;
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
  btn.addEventListener('click', deleteTodo);
}

function saveTodo() {
  console.log(todos);
  localStorage.setItem('todos', todos);
}
// ์ด ๋ฒ์ ผ์ JSON ์ฌ์ฉํ์ง ์์ ๋ฒ์ ผ
function loadTodo() {
  const localTodos = localStorage.getItem('todos');
  localTodos.split(',').forEach((todo) => {
    addTodo(todo);
  });
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ``;
  addTodo(newTodo);
  todos.push(newTodo);
  saveTodo();
});

function init() {
  todos.push(localStorage.getItem('todos'));
  console.log(todos);
  loadTodo();
}
init();
