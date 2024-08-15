let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

function createKey(keyCode)
{
    let listItemEl = document.createElement("li");
    listItemEl.classList.add("mt-1");
    listItemEl.textContent = keyCode;
    keyCodeList.appendChild(listItemEl);
}

function onKeydown(event)
{
    createKey(event.keyCode);
}

userInput.addEventListener("keydown",onKeydown);