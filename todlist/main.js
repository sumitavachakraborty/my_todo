//selectors
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter-todo");

//eventlistners
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deletecheck);
filteroption.addEventListener("click", filtertodo);

//functions

function addtodo(event) {
  event.preventDefault();
  //todo-div
  const tododiv = document.createElement("div");
  tododiv.classList.add("todo");

  const newtodo = document.createElement("li");
  newtodo.innerText = todoinput.value;
  newtodo.classList.add("todo-item");
  tododiv.appendChild(newtodo);

  const completebutton = document.createElement("button");
  completebutton.innerHTML = '<i class="fas fa-check"></i>';
  completebutton.classList.add("complete-btn");
  tododiv.appendChild(completebutton);

  const trashbutton = document.createElement("button");
  trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
  trashbutton.classList.add("trash-btn");
  tododiv.appendChild(trashbutton);

  todolist.appendChild(tododiv);
  //clear todo input value
  todoinput.value = "";
}

//deletcheck
function deletecheck(event) {
  const item = event.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filtertodo(e) {
  const todos = todolist.childNodes;

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
