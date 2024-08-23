let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let resultMsgEl = document.getElementById("resultMsg");

let questionsFormEl = document.getElementById("questionsForm");

let selectedCity = null;
let bgColorEl = document.getElementById("bgColor");

cityHyderabadEl.addEventListener("change",function(event)
{
    selectedCity = event.target.value;
});

cityChennaiEl.addEventListener("change",function(event)
{
    selectedCity = event.target.value;
});

cityDelhiEl.addEventListener("change",function(event)
{
    selectedCity = event.target.value;
});

cityMumbaiEl.addEventListener("change",function(event)
{
    selectedCity = event.target.value;
});

let citiesEl = document.getElementById("cities");

questionsFormEl.addEventListener("submit",function(event)
{
    event.preventDefault();
    if(selectedCity === null)
    {
        resultMsgEl.textContent = "Please Select an option!";
        resultMsgEl.style.color = "#dc3545" ;
        bgColorEl.style.backgroundColor = "#dc3545";
    }
    else if(selectedCity === "Delhi")
    {
        resultMsgEl.textContent = "Correct answer!!";
        resultMsgEl.style.color = "#2b9a40";
        bgColorEl.style.backgroundColor = "#2b9a40"
    }
    else
    {
        resultMsgEl.textContent = "Wrong answer, Please try again!";
        resultMsgEl.style.color = "#dc3545";
        bgColorEl.style.backgroundColor = "#dc3545";
    }
});




