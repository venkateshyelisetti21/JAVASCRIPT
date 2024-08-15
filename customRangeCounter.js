let startValueEl = document.getElementById("startInput");
let endValueEl = document.getElementById("endInput");
let counterValue = document.getElementById("counterValue");
let startBtn = document.getElementById("startBtn");


startBtn.onclick = function()
{
    let startCounter = parseInt(startValueEl.value);
    let endCounter = parseInt(endValueEl.value);
    if(startValueEl.value === "")
    {
        alert("Please enter start value");
        return;
    }
    else if(endValueEl.value === "")
    {
        alert("Please enter end value");
        return;
    }
    else
    {
        ctr(startCounter,endCounter);
    }
};

function ctr(startCounter,endCounter)
{
    let uniqueId = setInterval(function()  
    {
        if(startCounter <= endCounter)
        {
            counterValue.textContent = startCounter;
            startCounter += 1;
        }
        else
        {
            clearInterval(uniqueId);
        }
    }, 1000); 
}
