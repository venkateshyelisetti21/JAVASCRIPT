let counterEl = document.getElementById("counter");
let setBtn = document.getElementById("setBtn");
let clearBtn = document.getElementById("clearBtn");

let uniqueId = null;
setBtn.onclick = function()
{
    let count = 0;
    uniqueId = setInterval(function()
    {
        counterEl.textContent = count;
        counterEl.classList.add("number");
        count += 1;
    }, 1000);
}

clearBtn.onclick = function()
{
    clearInterval(uniqueId);
}