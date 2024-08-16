let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");
let jokeTextEl = document.getElementById("jokeText");


let URL = "https://apis.ccbp.in/jokes/random";
let options =
{
    method : "GET"
};

function getRandomJoke()
{
    jokeTextEl.classList.add("d-none");
    spinnerEl.classList.remove("d-none");

    fetch(URL,options)
    .then(function(response)
    {
        return response.json()
    })
    .then(function(jsonData)
    {
        jokeTextEl.classList.remove("d-none");
        spinnerEl.classList.add("d-none");

        jokeTextEl.textContent = jsonData.value;
    });
}

jokeBtnEl.addEventListener("click",getRandomJoke);