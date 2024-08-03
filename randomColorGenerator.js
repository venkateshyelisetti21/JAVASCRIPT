let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let randomColor = document.getElementById("randomColor");
 function generateColor()
 {
    let randomNum = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
    randomColor.style.backgroundColor = bgColorsArray[randomNum];
 }