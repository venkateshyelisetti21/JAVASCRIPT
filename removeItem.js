let inputValueEl = document.getElementById("inputValue");
let saveButtonEl = document.getElementById("saveButton");
let clearButtonEl = document.getElementById("clearButton");

let storageKey = "removeItem";

saveButtonEl.onclick = function()
{
    localStorage.setItem(storageKey,inputValueEl.value);
};

clearButtonEl.onclick = function()
{
    inputValueEl.value = "";
    localStorage.removeItem(storageKey);
};

