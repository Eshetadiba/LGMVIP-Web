const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#Input");
const addBtn = document.querySelector("#Btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${todo}</span><button class="deleteBtn" data-index="${index}">Delete</button>`;
    todoList.appendChild(li);
  });
}

// This function use for add a item in to do list

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("Please enter a todo item.");
    return;
  }
  todos.push(todoText);
  todoInput.value = "";
  renderTodos();
  saveToStorage();
}

// This function use for delete cell
function deleteTodo() {
  const index = parseInt(this.dataset.index);
  todos.splice(index, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteBtn")) {
    deleteTodo.call(event.target);
  }
});

renderTodos();




