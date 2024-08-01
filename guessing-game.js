let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNum = Math.ceil(Math.random()*100);

function checkGuess()
{
    let guessedNumber = parseInt(userInput.value);
    if(guessedNumber > randomNum)
    {
        gameResult.textContent = "It's too High, Try again...";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if(guessedNumber < randomNum)
        {
            gameResult.textContent = "It's too Low, Try again...";
            gameResult.style.backgroundColor = "#1e217c";
        }
        else if(guessedNumber === randomNum)
            {
                gameResult.textContent = "Congrats! You got it...";
                gameResult.style.backgroundColor = "green";
            }
            else
            {
                gameResult.textContent = "Please provide valid Input";
                gameResult.style.backgroundColor = "red";   
            }
        
}