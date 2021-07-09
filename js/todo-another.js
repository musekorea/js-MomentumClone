const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('#todo-input');

let todos = [];

function deleteTodo(e) {
  console.log(e.target.parentElement);
  const idNum = e.target.parentElement.id;
  const li = e.target.parentNode;
  li.remove();
  console.log(todos);
  todos = todos.filter((item) => {
    console.log(item.id, idNum);
    return item.id !== Number(idNum);
  });
  console.log(todos);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(newTodoObj) {
  const li = document.createElement('li');
  li.id = newTodoObj.id;
  const span = document.createElement('span');
  span.innerText = `${newTodoObj.content} `;
  const btn = document.createElement('button');
  btn.innerText = `🧺`;
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
  btn.addEventListener('click', deleteTodo);
}

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodo() {
  const localTodos = localStorage.getItem('todos');
  const parsedTodos = JSON.parse(localTodos);
  parsedTodos.forEach((todoObj) => {
    addTodo(todoObj);
  });
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ``;
  const newTodoObj = { id: Date.now(), content: newTodo };
  addTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodo();
});

function init() {
  todos = JSON.parse(localStorage.getItem('todos'));
  if (todos === null) {
    todos = [];
    return;
  } else {
    loadTodo();
  }
}
init();
