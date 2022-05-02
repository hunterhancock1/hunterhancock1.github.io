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
var numProt = document.getElementById("numProt");
var numTopp = document.getElementById("numTopp");

function generate(v, numProt, numTopp) {
    console.log(vegT, vegF, numProt, numTopp);
    const base = Math.floor(Math.random() * 6); // ind of base
    if(v) { // vegetarian
        var prot = Math.floor(Math.random() * 5); // ind of prot (1-5)
    }
    else { // non-veg
        var prot = 3 + Math.floor(Math.random() * 2); // ind of prot (4-5)
    }
    
    var toppings = [];
    var sauces = [];
}

var inputElement = document.createElement('input');
inputElement.type = "button"
inputElement.addEventListener('click', function(){
    // func
});

​document.body.appendChild(inputElement);​