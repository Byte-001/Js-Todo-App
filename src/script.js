  //* dom elements
  const todoInput = document.getElementById("newTodoField");
  const todoButton = document.querySelector(".todoBtn");
  const todoContainer = document.querySelector(".todos");
  const form = document.getElementById("todoForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

//* get todo function
todoButton.addEventListener("click", () => {
  let todo = todoInput.value;
  if (todo === null || todo === "") {
    window.alert("Lutfen bir todo giriniz...");
  } else {
    createTodo(todo);
    todoInput.value = "";
  }
});

//* create todo function
function createTodo(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";

  const content = document.createElement("div");
  content.className = "content";

  const todoText = document.createElement("input");
  todoText.id = "todoContent";
  todoText.setAttribute("type", "text");
  todoText.readOnly = true;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.setAttribute("type", "button");
  editBtn.id = "editButton";
  editBtn.innerHTML = "edit";
  editBtn.addEventListener("click", () => {
    if (editBtn.innerText.toLowerCase() == "edit") {
      todoText.readOnly = false;
      todoText.focus();
      editBtn.innerText = "Save";
    } else {
      todoText.readOnly = true;
      editBtn.innerText = "EDIT";
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.id = "deleteButton";
  deleteBtn.innerHTML = "delete";
  deleteBtn.addEventListener("click", () => {
    todoContainer.removeChild(todoDiv);
  });

  todoContainer.appendChild(todoDiv);
  todoDiv.appendChild(content);
  content.appendChild(todoText);
  todoDiv.appendChild(actionsDiv);
  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);

  todoText.value = todo;
}
