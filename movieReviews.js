let titleInputElement = document.getElementById("titleInput");
let reviewTextareaElement = document.getElementById("reviewTextarea");
let addButton = document.getElementById("addButton");
let reviewsContainer = document.getElementById("reviewsContainer");

addButton.onclick = function()
{
    let titleInput = titleInputElement.value;
    let reviewTextareaInput = reviewTextareaElement.value;

    if(titleInput === "")
    {
        alert("Please enter a Movie");
        return;
    }


    let reviewHeading = document.createElement("h1");
    reviewHeading.textContent = "MovieTitle : " + titleInput;
    reviewHeading.classList.add("movie-title");
    reviewsContainer.appendChild(reviewHeading);

    let reviewContent = document.createElement("p");
    reviewContent.textContent = "Review : " + reviewTextareaInput;
    reviewsContainer.appendChild(reviewContent);

    let horizantalEl = document.createElement("hr");
    reviewsContainer.appendChild(horizantalEl);

    titleInput.value = "";
    reviewTextareaInput.value = "";
}


