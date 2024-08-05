let todoItemsContainer = document.getElementById("todoItemsContainer");

//Array for the todo items
let todoList = [
    {
        text : "Learn HTML"
    },
    {
        text : "Learn CSS"
    },
    {
        text : "Learn Bootstrap"
    },
    {
        text : "Learn Javascript"
    }
];

//function for each item
function createTodoItem(todo)
{
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.getAttribute("for","checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let DelElement = document.createElement("i");
    DelElement.classList.add("far","fa-trash-alt","delete-icon");
    labelContainer.appendChild(DelElement);
}


//for..of loop
for(let i of todoList)
{
    createTodoItem(i);
}

