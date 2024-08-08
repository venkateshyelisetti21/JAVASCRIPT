let bgContainerEl = document.getElementById("bgContainerEl");
bgContainerEl.classList.add("bg-container","d-flex","flex-column","justify-content-center");

let counterValueEl = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");


if (clickCount === null) 
{
    clickCount = 0;
} 
else 
{
    clickCount = parseInt(clickCount);
}

let descriptionEl = document.createElement("p");
descriptionEl.textContent = "Click the button to increase the count!";
descriptionEl.classList.add("description");
bgContainerEl.appendChild(descriptionEl);

let buttonContainer = document.createElement("div");
bgContainerEl.appendChild(buttonContainer);

let buttonEl = document.createElement("button");
buttonEl.textContent = "Click Me!";
buttonEl.classList.add("button","btn","btn-primary");
buttonEl.onclick = function()
{
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    localStorage.setItem("clickCount", updatedCounterValue);
    counterValueEl.textContent = updatedCounterValue;
}
buttonContainer.appendChild(buttonEl);

