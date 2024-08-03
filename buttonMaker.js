let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeight");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function onApplyProperties()
{
    let bgColorValue = bgColorInput.value;
    let fontColorVlaue = fontColorInput.value;
    let fontSizeVlaue = fontSizeInput.value;
    let fontWeightVlaue = fontWeightInput.value;
    let paddingVlaue = paddingInput.value;
    let borderRadiusVlaue = borderRadiusInput.value;

    customButton.style.backgroundColor = bgColorValue;
}
