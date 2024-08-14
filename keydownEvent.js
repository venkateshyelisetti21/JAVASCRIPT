let inputEl = document.createElement("input");
document.body.appendChild(inputEl);

function printKeydown(event)
{
    console.log("Key Pressed");
    console.log(event.key);
}

inputEl.addEventListener("keydown",printKeydown);



//keyup event 
// similar to keydown event
// syntax:
// inputEl.addEventListener("keyup",printKeydown);
// Occurs whenever we releases a key
