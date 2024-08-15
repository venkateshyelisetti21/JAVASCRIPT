let containerEl = document.getElementById("container");
let headingEl = document.getElementById("heading");
let inputValue = document.getElementById("userInput");

function changeTheme(event)
{
    if(event.key === "Enter")
    {
        if(inputValue.value === "Dark")
        {
            headingEl.style.color = "white";
            containerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        }
        else if(inputValue.value === "Light")
        {
            headingEl.style.color = "#014d40";
            containerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        }
        else
        {
            alert("Enter Valid Input! Dark or Light");
            return;
        }
    }
}

inputValue.addEventListener("keydown",changeTheme);