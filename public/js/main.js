// Selecteur
let toDoInput = document.querySelector('.todo-inpt');
let toDoButton = document.querySelector('.todo-btn');
let toDoList = document.querySelector('.todo-list');

// Event Listeners
toDoButton.addEventListener('click', addTodo);//ajoute event
toDoList.addEventListener('click', deleteCheck);//efface bouton

//fonctions
function addTodo(event){
    event.preventDefault()
    
    // to do div
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    // li
    let newTodo = document.createElement('li');
    newTodo.innerText = toDoInput.value;
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
    // nettoi l'entrée toDoInput value
    toDoInput.value = "";
}

function deleteCheck(e){
    let item = e.target;
    // delete todo
    if(item.classList[0] === "trash-btn") {
        let todo = item.parentElement;
        todo.remove();
    }
    // check btn
    if(item.classList[0] === "complete-btn"){
        let todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}