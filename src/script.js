//* dom elements
const todoInput = document.getElementById("newTodoField");
const todoButton = document.querySelector(".todoBtn");
const todoContainer = document.querySelector(".todos");
const form = document.getElementById("todoForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

todoButton.addEventListener("click", getTodoInput);

//* get todo function
function getTodoInput() {
  let todo = todoInput.value;
  if (todo === "") {
    window.alert("Lutfen bir todo giriniz...");
  } else {
    createTodo(todo);
    todoInput.value = ""; 
  }
}

//* create todo function
function createTodo(todo){
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';

    const content = document.createElement('div');
    content.className = 'content';

    const todoText = document.createElement('input');
    todoText.id = 'todoContent';
    todoText.setAttribute("type", "text");
    todoText.readOnly = true;
    
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    const editBtn = document.createElement('button');
    editBtn.setAttribute("type", "submit");
    editBtn.id = "editButton";
    editBtn.innerHTML = "edit";
    
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("type", "submit");
    deleteBtn.id = "deleteButton";
    deleteBtn.innerHTML = "delete";

    todoContainer.appendChild(todoDiv);
    todoDiv.appendChild(content);
    content.appendChild(todoText);
    todoDiv.appendChild(actionsDiv);
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    todoText.value = todo;
}
