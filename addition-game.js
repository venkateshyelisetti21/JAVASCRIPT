let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

function set()
{
    let a = parseInt(firstNumber.textContent);
    let b = parseInt(secondNumber.textContent);
    if((a + b) === parseInt(userInput.value))
    {
        gameResult.textContent = "Correct! You're a Genius";
        gameResult.style.backgroundColor = "#028a0f";
    }
    else
    {
        gameResult.textContent = "Wrong! Please Try Again";
        gameResult.style.backgroundColor = "#1e217c"
    }
}

function reset()
{
    let random1 = Math.random()*100;
    let random2 = Math.random()*100;
    firstNumber.textContent = Math.ceil(random1);
    secondNumber.textContent = Math.ceil(random2);
    userInput.value = "";
    gameResult.textContent = "";
}