const body = document.querySelector("body");
const lightOff = document.querySelector("#lightOff");
const lightOn = document.querySelector("#lightOn");
const switchBtn = document.querySelector(".btn");




switchBtn.addEventListener ("click", function (event) {
    if (switchBtn.innerHTML === "ON") {
    lightOn.style.visibility = "visible";
    switchBtn.textContent = "OFF"
    body.style.backgroundColor = "#eee";
} else {
    lightOn.style.visibility = "hidden";
    switchBtn.textContent = "ON"
    body.style.backgroundColor = "black";
}
})








