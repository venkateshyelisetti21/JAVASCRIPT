let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let addBtn = document.getElementById("addBtn");
let errorMsgEl = document.getElementById("errorMsg");

let errorMsg = "Invalid Input";

addBtn.onclick = function()
{
    let userInput = userInputEl.value;
    if(userInput !== "")
    {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        newWords(userInput); 
    }
    else
    {
        errorMsgEl.textContent = errorMsg;
    }

}

function newWords(word)
{
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let inputEl = document.createElement("span");
    inputEl.classList.add("ml-3");
    inputEl.style.fontSize = randomFontSize;
    inputEl.textContent = word;
    wordsContainer.appendChild(inputEl);
}

for(let i of wordCloud)
{
    newWords(i);
}