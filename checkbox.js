let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "myCheckbox";
document.body.appendChild(inputElement);
 
let labelElement = document.createElement("label");
labelElement.htmlFor = "myCheckbox";
labelElement.textContent = "Graduated";
document.body.appendChild(labelElement);  