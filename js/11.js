document.getElementById("e1").addEventListener("click", clickButton);

function clickButton() {
    document.getElementById("e1p").innerHTML = "You clicked the button! Nice!";
}

document.getElementById("e2").addEventListener("mouseover", changeImage);

function changeImage() {
    document.getElementById("e2").src = "../img/ws2.png";
}