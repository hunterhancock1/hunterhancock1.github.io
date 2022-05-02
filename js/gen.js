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
            "splash": "Seasoned ground beef"
        },
        {
            "id": "chicken",
            "v": false,
            "splash": "Grilled chicken" 

        },
        {
            "id": "steak",
            "v": false,
            "splash": "Grilled steak" 
        },
        {
            "id": "potato",
            "v": true,
            "splash": "Potatoes"
        },
        {
            "id": "bean",
            "v": true,
            "splash": "Black beans"
        },
    ],
    "topping": [
        {
            "id": "cheese",
            "v": true,
            "splash": "Shredded Cheese"
        },
        {
            "id": "lettuce",
            "v": true,
            "splash": "Lettuce"
        },
        {
            "id": "tomato",
            "v": true,
            "splash": "Tomatoes"
        },
        {
            "id": "bbeans",
            "v": true,
            "splash": "Black beans"
        },
        {
            "id": "rbeans",
            "v": true,
            "splash": "Refried beans"
        },
        {
            "id": "sour cream",
            "v": true,
            "splash": "Sour cream"
        },
        {
            "id": "nacho cheese",
            "v": true,
            "splash": "Nacho cheese sauce"
        },
        {
            "id": "red sauce",
            "v": true,
            "splash": "Red sauce"
        },
        {
            "id": "guac",
            "v": true,
            "splash": "Guacamole"
        }
    ]
}

// var vegtf = document.getElementById("v").value;

const gbutton = document.getElementById("gbutton");

gbutton.addEventListener("click", generate);

function generate(){
    var numProt = document.getElementById("numProt").value;
    var numTopp = document.getElementById("numTopp").value;  

    var myVeg = document.querySelector('input[name=veg]:checked').value;
    var myBase = ing.base[Math.floor(Math.random() * 6)];

    document.getElementById("base").innerHTML = "In a " + myBase.splash + ":";

    var myProts = [];
    while (numProt) {
        myProts.push(ing.protein[Math.floor(Math.random() * 5)]);
        numProt--;
    }
    var myTopps = [];
    while (numTopp) {
        myTopps.push(ing.topping[Math.floor(Math.random() * 9)]);
        numTopp--;
    }

    console.log(myVeg);

}

