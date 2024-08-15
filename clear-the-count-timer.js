let clearBtn = document.getElementById("clearBtn");
let counterValue = document.getElementById("counterValue");

let counter = 0;
let invalidValue = setInterval(function()
{
    counterValue.textContent = counter;
    counter += 1;
},1000);

clearBtn.onclick = function()
{
    clearInterval(invalidValue);
};