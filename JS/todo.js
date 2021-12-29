const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input")

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos))
}



function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(oo => oo.id !== parseInt(li.id))
    saveToDos()
}

function paintToDo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    toDoList.append(li)
    const span = document.createElement("span")
    span.innerText = newTodo.text
    li.appendChild(span)
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(button)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(),
        text: newTodo
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
}



toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos = localStorage.getItem("todos")
console.log(savedToDos)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}

console.log(JSON.stringify(toDos))