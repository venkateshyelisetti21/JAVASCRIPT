let inputValue = document.getElementById("inputValue");
let saveButton = document.getElementById("saveButton");
let clearButton = document.getElementById("clearButton");

saveButton.onclick = function()
{
    localStorage.setItem("saveItem",inputValue.value);
}
clearButton.onclick = function()
{
    localStorage.removeItem("saveItem");
    inputValue.value = "";
}