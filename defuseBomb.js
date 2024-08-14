let userInputEl = document.getElementById("userInput");
let timer = document.getElementById("timer");

userInputEl.addEventListener("keydown", function(event)
{
    if(event.key === "Enter")
    {
        enterKey = "Enter";
    }
});

userInputEl.addEventListener('keydown',function(event)
{
    let userInput = userInputEl.value;
    if(event.key === "Enter" && (userInput === "Delhi" || userInput === "delhi" || userInput === "Delhi") && countdown !== 0)
    {
        timer.textContent = "CORRECT✅!!";
        clearInterval(interValid);
    }
})

let countdown = 15;

let interValid = setInterval(function()
{
    countdown -= 1;
    console.log(countdown);
    timer.textContent = countdown;
    if(countdown === 0)
    {
        timer.textContent = "Boom💥, You Lost";
        clearInterval(interValid);
    }
}, 1000);
