let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Client","to":"Server"}';

let parsedText = JSON.parse(greeting);

let greetFromEl = document.getElementById("greetFrom");
greetFromEl.classList.add("greet");
let greetToEl = document.getElementById("greetTo");
greetToEl.classList.add("greet");
let greetTextEl = document.getElementById("greetText");


greetTextEl.textContent = parsedText.greetText;
greetFromEl.textContent = "From : " + parsedText.from;
greetToEl.textContent = "To : " + parsedText.to;