let startIndexEl = document.getElementById("startIndex");
let deleteCountEl = document.getElementById("deleteCount");
let itemToAddEl = document.getElementById("itemToAdd");
let spliceButtonEl = document.getElementById("spliceButton");
let updatedArrayEl = document.getElementById("updatedArray");

let myArray = [1,2,3,4,5,6];

spliceButtonEl.onclick = function()
{
    let startIndex = startIndexEl.value;
    let deleteCount = deleteCountEl.value;
    let itemToAdd = itemToAddEl.value;

    

    if(startIndex === "")
    {
        alert("Please enter start index");
        return;
    }
    else if(deleteCount === "")deleteCount = 0;
    if(itemToAdd === "")
    {
        myArray.splice(parseInt(startIndex),parseInt(deleteCount));
    }
    else
    {
        if(isNaN(itemToAdd))
        {
            myArray.splice(parseInt(startIndex),parseInt(deleteCount),itemToAdd);
        }
        else
        {
            myArray.splice(parseInt(startIndex),parseInt(deleteCount),parseInt(itemToAdd));
        }
    }
    updatedArrayEl.textContent = myArray;
    startIndex = "";
    deleteCount = "";
    itemToAdd = "";
};
