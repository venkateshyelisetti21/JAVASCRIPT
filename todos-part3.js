let todoItemsContainer = document.getElementById("todoItemsContainer");
let saveTodoButton = document.getElementById("saveTodoButton");

//Array for the todo items
// let todoList = [
//     {
//         text : "Learn HTML",
//         uniqueNo :1
//     },
//     {
//         text : "Learn CSS",
//         uniqueNo :2
//     },
//     {
//         text : "Learn Bootstrap",
//         uniqueNo :3
//     },
//     {
//         text : "Learn Javascript",
//         uniqueNo :4
//     }
// ];

// saveButton onclick

saveTodoButton.onclick = function()
{
    localStorage.setItem("todoList",JSON.stringify(todoList));
}

//getting todo list from local storage

function getTodoListFromLocalStroage()
{
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if(parsedTodoList === null)
    {
        return [];
    }
    else
    {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStroage();


//onTodoStatusChange function
function onTodoStatusChange(checkboxId, labelId)
{
    let checkboxElement =document.getElementById(checkboxId);
    let labelEl = document.getElementById(labelId);
    ////if-else condition
    // if(checkboxElement.checked === true)
    // {
    //     labelEl.classList.add("checked");
    // }
    // else
    // {
    //     labelEl.classList.remove("checked");
    // }

    //toggle
    labelEl.classList.toggle("checked");
}

//onDeleteTodo function
function onDeleteTodo(todoId)
{
    let todoEl = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoEl);
}

//function for each item
function createTodoItem(todo)
{
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;
    
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.onclick = function()
    {
        onTodoStatusChange(checkboxId,labelId);
    };
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let DelElement = document.createElement("i");
    DelElement.classList.add("far","fa-trash-alt","delete-icon");
    DelElement.onclick = function()
    {
        onDeleteTodo(todoId);
    };
    labelContainer.appendChild(DelElement);
}

//for..of loop on todoList
for(let i of todoList)
{
    createTodoItem(i);
}


//Adding new todo Elements
let addTodoButton = document.getElementById("addTodoButton");
addTodoButton.onclick = function()
{
    onAddTodo();
};

//Previous count of todo elements
let todosCount = todoList.length;

//onAddTodo function
function onAddTodo()
{
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if(userInputValue === "")
    {
        alert("Enter Valid Input");
        return;
    }
    todosCount += 1;
    let newTodo = {
        text : userInputValue,
        uniqueNo :todosCount
    };
    todoList.push(newTodo);
    createTodoItem(newTodo);
}


