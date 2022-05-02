let ing = {
    "base": [
        {
            "id": "staco",
            "v": true,
            "splash": "Soft Taco Shell"
        },
        {
            "id": "ctaco",
            "v": true,
            "splash": "Crunchy Taco Shell"
        },
        {
            "id": "burrito",
            "v": true,
            "splash": "Burrito"
        },
        {
            "id": "chalupa",
            "v": true,
            "splash": "Chalupa Shell"
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
            "id": "potato",
            "v": true,
            "splash": "Potatoes"
        },
        {
            "id": "bbean",
            "v": true,
            "splash": "Black Beans"
        },
        {
            "id": "rbean",
            "v": true,
            "splash": "Refried Beans"
        },
        {
            "id": "groundbeef",
            "v": false,
            "splash": "Seasoned Ground Beef"
        },
        {
            "id": "chicken",
            "v": false,
            "splash": "Grilled Chicken" 
        },
        {
            "id": "steak",
            "v": false,
            "splash": "Grilled Steak" 
        }
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
            "splash": "Black Beans"
        },
        {
            "id": "rbeans",
            "v": true,
            "splash": "Refried Beans"
        },
        {
            "id": "sour cream",
            "v": true,
            "splash": "Sour Cream"
        },
        {
            "id": "nacho cheese",
            "v": true,
            "splash": "Nacho Cheese Sauce"
        },
        {
            "id": "red sauce",
            "v": true,
            "splash": "Red Sauce"
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
    if(myVeg == 2){
        while (numProt) {
            myProts.push(ing.protein[Math.floor(Math.random() * 3)]);
            numProt--;
        }
    }
    else{
        while (numProt) {
            myProts.push(ing.protein[Math.floor(Math.random() * 6)]);
            numProt--;
        }
    }
    var myProtsStr = myProts[0].splash;
    for (let i = 1; i < myProts.length; i++){
        myProtsStr += ", " + myProts[i].splash;
    }


    var myTopps = [];
    while (numTopp) {
        myTopps.push(ing.topping[Math.floor(Math.random() * 9)]);
        numTopp--;
    }
    var myToppsStr = myTopps[0].splash;
    for (let i = 1; i < myTopps.length; i++){
        myToppsStr += ", " + myTopps[i].splash;     
    }

    document.getElementById("prot").innerHTML = "Add the following protiens in order: ";
    document.getElementById("prot").innerHTML += myProtsStr;

    document.getElementById("topp").innerHTML = "Then, add the following toppings in order: ";
    document.getElementById("topp").innerHTML += myToppsStr;
    
    console.log(myVeg);

}

