let secBtn20 = document.getElementById("secBtn20");
let secBtn30 = document.getElementById("secBtn30");
let secBtn40 = document.getElementById("secBtn40");
let minBtn = document.getElementById("minBtn");
let counterValue = document.getElementById("counterValue");

let counter = 0;

secBtn20.onclick = function()
{
    counter = 20;
    let uniqueId = setInterval(function() 
    {
        if(counter >0)
        {
            counterValue.textContent = counter + " seconds left";
            counter -=1;
        }
        else
        {
            counterValue.textContent = "Your moment is completed";
            clearInterval(uniqueId);
        }
    }, 1000);
};

secBtn30.onclick = function()
{
    counter = 30;
    let uniqueId = setInterval(function() 
    {
        if(counter >0)
        {
            counterValue.textContent = counter + " seconds left";
            counter -=1;
        }
        else
        {
            counterValue.textContent = "Your moment is completed";
            clearInterval(uniqueId);
        }
    }, 1000);
};

secBtn40.onclick = function()
{
    counter = 40;
    let uniqueId = setInterval(function() 
    {
        if(counter >0)
        {
            counterValue.textContent = counter + " seconds left";
            counter -=1;
        }
        else
        {
            counterValue.textContent = "Your moment is completed";
            clearInterval(uniqueId);
        }
    }, 1000);
};

minBtn.onclick = function()
{
    counter = 60;
    let uniqueId = setInterval(function() 
    {
        if(counter >0)
        {
            counterValue.textContent = counter + " seconds left";
            counter -=1;
        }
        else
        {
            counterValue.textContent = "Your moment is completed";
            clearInterval(uniqueId);
        }
    }, 1000);
};