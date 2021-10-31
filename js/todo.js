const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todoArr = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArr));
}

function deleteTodo(e) {
  const targetLi = e.target.parentElement;
  targetLi.remove();
  todoArr = todoArr.filter((toDo) => toDo.id !== parseInt(targetLi.id));
  saveTodo();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();

  const newTodo = todoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoArr.push(newTodoObj);
  todoInput.value = "";
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  todoArr = parseTodos;
  parseTodos.forEach((item) => {
    paintTodo(item);
  });
}
