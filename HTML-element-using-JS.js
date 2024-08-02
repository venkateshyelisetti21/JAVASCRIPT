//Creating Div container
let divContainer = document.createElement("div");

//Creating and addong text to heading tag
let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";

//Button element1
let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading";

//Button element2
let btnElement2 = document.createElement("button");
btnElement2.textContent = "Change Heading2";

//Styles Remove button
let removebtn = document.createElement("button");
removebtn.textContent = "Remove Styles";

//onClick Function
btnElement.onclick = function()
{
    h1Element.textContent = "4.o Technologies";
    h1Element.style.color = "blue";
    h1Element.style.fontSize = "40px";
    h1Element.style.textDecoration = "underline";
    h1Element.style.fontFamily = "TimesNewRoman";
}

//onClick Function without Inline elements
btnElement2.onclick =function()
{
    h1Element.textContent = "4.o Technologies";
    h1Element.classList.add("heading");
}

//Button for removing styles
removebtn.onclick = function()
{
    h1Element.classList.remove("heading");
}


//Attachments
document.body.appendChild(divContainer);
divContainer.appendChild(h1Element);
divContainer.appendChild(btnElement);
divContainer.appendChild(btnElement2);
divContainer.appendChild(removebtn);
