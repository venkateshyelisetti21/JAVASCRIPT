let likeButtonElement = document.getElementById("likeButton");
let likeIconElement = document.getElementById("likeIcon");
let puppyImage = document.getElementById("puppyImage");
let isLiked = false;

function onClickLikeButton()
{
    if(isLiked === false)
    {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconElement.style.color = "#0967d2";
        likeButtonElement.style.backgroundColor = "#0967d2";
        // likeButtonElement.style.color = "#ffffff";
        isLiked = true;
    }
    else
    {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        likeIconElement.style.color = "#cbd2d9";
        likeButtonElement.style.color = "#9aa5b1";
        isLiked = false;
    }
}