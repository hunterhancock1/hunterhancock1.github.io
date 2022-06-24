document.getElementById("e1").addEventListener("click", clickButton);

function clickButton() {
    document.getElementById("e1p").innerHTML = "You clicked the button! Nice!";
}

document.getElementById("e2").addEventListener("mouseover", hoverOn);
document.getElementById("e2").addEventListener("mouseout", hoverOff);

function hoverOn() {
    document.getElementById("e2p").innerHTML = "Keep my wife's name out your f*cking mouth";
}

function hoverOff() {
    document.getElementById("e2p").innerHTML = "Element 2: Hover over the image"
}
