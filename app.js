//Selectors
let day = document.querySelector(".day");
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");


//Events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteList)
todoList.addEventListener("click", checkList)


//Functions
function addTodo(event) {
    event.preventDefault();
    let newDiv = document.createElement("div");
    newDiv.classList.add("todoNewDiv");
    
    let checkBox1 = document.createElement("input");
    checkBox1.type = "checkbox";
    checkBox1.id = "check";

    let newLabel = document.createElement("label");
    newLabel.classList.add("newLabel");
    newLabel.htmlFor = "check"              // "htmlFor" label ve checkbox birleştirmek için
    
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "X"
    deleteButton.classList.add("deleteButton")

    newLabel.appendChild(document.createTextNode(`${todoInput.value}`));
    todoInput.value = ""
    newDiv.appendChild(checkBox1);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(deleteButton);
    todoList.appendChild(newDiv);
}

function deleteList(event){
    const item1 = event.target;
    if (item1.classList[0] == "deleteButton") {
        const todo1 = item1.parentElement;
        todo1.remove();
    }
}

function checkList(event){
    const item = event.target;
    const todo = item.parentElement;
    if (item.checked) {
        todo.classList.add("checked")
    }else{
        todo.classList.remove("checked")
    }
}


// window.addEventListener("load", writeDay);

// function writeDay() {
//     let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     day.innerText = days[new Date().getDay()];
// }
