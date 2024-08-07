let bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container");

document.body.appendChild(bgContainer);


let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
bgContainer.appendChild(headingEl);

let unorderedListContainer = document.createElement("ul");
unorderedListContainer.classList.add("list-container");
bgContainer.appendChild(unorderedListContainer);

// let itemsList = [ 
//     {
//         text : "Milk"
//     },
//     {
//         text : "Peanut Butter"
//     },
//     {
//         text : "Choco Chips"
//     },
//     {
//         text : "Tomato Sauce"
//     },
//     {
//         text : "Cup Cakes"
//     },
//     {
//         text : "Noodles"
//     }
// ];

let itemsList = ["Milk", "Peanut Butter", "Choco Chips", "Tomato Sauce", "Cup Cakes", "Noodles"];

function appendEachItem(todo)
{
    let listEl = document.createElement("li");
    // listEl.textContent = todo.text;
    listEl.textContent = todo;
    unorderedListContainer.appendChild(listEl);
}

for(let i of itemsList)
{
    appendEachItem(i);
}

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "inputEl"
bgContainer.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.getAttribute("for","inputEl");
labelEl.classList.add("delivery-text");
labelEl.textContent = "Need Home Delivery";
bgContainer.appendChild(labelEl);

let breakEl = document.createElement("br");
bgContainer.appendChild(breakEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Proceed To Pay";
bgContainer.appendChild(buttonEl);


