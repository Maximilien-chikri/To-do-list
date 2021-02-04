// Selecteur
let toDoInput = document.querySelector('.todo-inpt');
let toDoButton = document.querySelector('.todo-btn');
let toDoList = document.querySelector('.todo-list');

// Event Listeners
toDoButton.addEventListener('click', addTodo);
toDoList.addEventListener('click', deleteCheck);

//fonctions
function addTodo(event){
    event.preventDefault()
    
    // to do div
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    // li
    let newTodo = document.createElement('li');
    newTodo.innerText = toDoInput.Value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check btn
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // delete btn
    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // append to list
    toDoList.appendChild(todoDiv);
    // cleat toDoInput value
    toDoInput.Value = "";
}

function deleteCheck(e){
    let item = e.target;
    // delete todo
    if(item.classList[0] === "trash-btn") {
        let todo = item.parentElement;
        todo.remove();
    }
    // check btn
    if(item.classList[0] === "complet-btn"){
        let todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}