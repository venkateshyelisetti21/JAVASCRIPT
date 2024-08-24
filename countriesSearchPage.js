let spinnerEl = document.getElementById("spinner");
let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");

searchInputEl.addEventListener("keydown", search);

function search(event)
{
    resultCountriesEl.textContent = "";
    let url = "https://apis.ccbp.in/countries-data";
    let options =
    {
        method : "GET"
    };
    fetch(url,options)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(jsonData)
    {
        let value = jsonData;
        getCountry(value);
    });
}

function getCountry(value)
{
    for(let i of value)
    {
        let name = searchInputEl.value;
        let country = i.name;
        if(country.indexOf(name) !== -1)
        {
            createAndAppendCountry(i);
        }
    }
}

function createAndAppendCountry(result)
{
    console.log(typeof(result));
    let {flag, name, population} = result;
    let countryContainer = document.createElement("div");
    countryContainer.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountriesEl.appendChild(countryContainer);

    let countryImg = document.createElement("img");
    countryImg.src = flag;
    countryImg.classList.add("country-flag", "mt-auto", "mb-auto");
    countryContainer.appendChild(countryImg);

    let countryInfoContainer = document.createElement("div");
    countryInfoContainer.classList.add("d-flex", "flex-column", "ml-4");
    countryContainer.appendChild(countryInfoContainer);

    let countryName = document.createElement("p");
    countryName.textContent = name;
    countryName.classList.add("country-name");
    countryInfoContainer.appendChild(countryName);

    let countryPopulation = document.createElement("p");
    countryPopulation.textContent = population;
    countryPopulation.classList.add("country-population");
    countryInfoContainer.appendChild(countryPopulation);
}