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
  btn.innerText = `🧺`;
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
  btn.addEventListener('click', deleteTodo);
}

function saveTodo() {
  console.log(todos);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodo() {
  const localTodos = localStorage.getItem('todos');
  const parsedTodos = JSON.parse(localTodos);
  parsedTodos.forEach((todo) => {
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
  if (todos.length === 0) {
    return;
  } else {
    loadTodo();
    todos = JSON.parse(localStorage.getItem('todos'));
  }
}
init();
