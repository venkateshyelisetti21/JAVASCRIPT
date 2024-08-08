let saveButton = document.getElementById("saveButton");
let textAreaEl = document.getElementById("message");

saveButton.onclick = function()
{
    let userEnteredText = textAreaEl.value;
    localStorage.setItem("userEnteredText",userEnteredText);
};

let storedValue = localStorage.getItem("userEnteredText");
if(storedValue === null)
{
    textAreaEl.value = "";
}
else
{
    textAreaEl.value = storedValue;
}