let inputValueEl = document.getElementById("inputValue");
let findButtonEl = document.getElementById("findButton");
let indexOfNumberEl = document.getElementById("indexOfNumber");

let myArray = [17, 31, 77, 20, 63];

findButtonEl.onclick = function() 
{
    let inputValue = parseInt(inputValueEl.value);
    let indOutput = myArray.findIndex(
        function(eachItem)
        {
            if(eachItem === inputValue)
            {
                return true;
            }
            else 
            {
                return false;
            }
        }
    );
    if(indOutput === -1)
    {
        indOutput = "Element Not Found!";
    }
    indexOfNumberEl.textContent = indOutput;
}
