let ing = {
    "base": [
        {
            "id": "staco",
            "v": true,
            "splash": "Soft taco shell"
        },
        {
            "id": "ctaco",
            "v": true,
            "splash": "Crunchy taco shell"
        },
        {
            "id": "burrito",
            "v": true,
            "splash": "Burrito"
        },
        {
            "id": "chalupa",
            "v": true,
            "splash": "Chalupa shell"
        },
        {
            "id": "bowl",
            "v": true,
            "splash": "Bowl"
        },
        {
            "id": "quesadilla",
            "v": true,
            "splash": "Quesadilla"
        },
    ],
    "protein": [
        {
            "id": "ground beef",
            "v": false,
        },
        {
            "id": "chicken",
            "v": false
        },
        {
            "id": "steak",
            "v": false
        },
        {
            "id": "potato",
            "v": true
        },
        {
            "id": "bean",
            "v": true
        },
    ],
    "topping": [
        {
            "id": "cheese",
            "v": true
        },
        {
            "id": "lettuce",
            "v": true
        },
        {
            "id": "tomato",
            "v": true
        },
        {
            "id": "bbeans",
            "v": true
        },
        {
            "id": "rbeans",
            "v": true
        },
        {
            "id": "sour cream",
            "v": true
        },
        {
            "id": "nacho cheese",
            "v": true
        },
        {
            "id": "red sauce",
            "v": true
        },
        {
            "id": "guac",
            "v": true
        }
    ]
}

var vegT = document.getElementById("yv");
var vegF = document.getElementById("nv");

const gbutton = document.getElementById("gbutton");

gbutton.addEventListener("click", generate());

function generate(){
    var numProt = document.getElementById("numProt").value;
    var numTopp = document.getElementById("numTopp").value;  
    var myBase = ing.base[Math.floor(Math.random() * 5)];
    document.getElementById("field").innerHTML = myBase.splash + " prot: " + numProt + " topp: " + numTopp;
}

