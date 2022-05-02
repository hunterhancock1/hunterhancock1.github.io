let ing = {
    "base": [
        {
            "id": "staco",
            "v": true,
            "splash": "Soft Taco Shell",
            "src": './img/gen/staco.png'
        },
        {
            "id": "ctaco",
            "v": true,
            "splash": "Crunchy Taco Shell",
            "src": './img/gen/ctaco.png'
        },
        {
            "id": "burrito",
            "v": true,
            "splash": "Burrito",
            "src": './img/gen/burrito.png'
        },
        {
            "id": "chalupa",
            "v": true,
            "splash": "Chalupa Shell",
            "src": './img/gen/chalupa.png'
        },
        {
            "id": "bowl",
            "v": true,
            "splash": "Bowl",
            "src": './img/gen/bowl.png'
        },
        {
            "id": "quesadilla",
            "v": true,
            "splash": "Quesadilla",
            "src": './img/gen/quesadilla.png'
        },
    ],
    "protein": [
        {
            "id": "potato",
            "v": true,
            "splash": "Potatoes",
            "src": './img/gen/potato.png'
        },
        {
            "id": "bbean",
            "v": true,
            "splash": "Black Beans",
            "src": './img/gen/bbeans.png'
        },
        {
            "id": "rbean",
            "v": true,
            "splash": "Refried Beans",
            "src": './img/gen/rbeans.png'
        },
        {
            "id": "groundbeef",
            "v": false,
            "splash": "Seasoned Ground Beef",
            "src": './img/gen/beef.png'
        },
        {
            "id": "chicken",
            "v": false,
            "splash": "Grilled Chicken",
            "src": './img/gen/chicken.png'
        },
        {
            "id": "steak",
            "v": false,
            "splash": "Grilled Steak",
            "src": './img/gen/steak.png' 
        }
    ],
    "topping": [
        {
            "id": "cheese",
            "v": true,
            "splash": "Shredded Cheese",
            "src": './img/gen/cheese.png'
        },
        {
            "id": "lettuce",
            "v": true,
            "splash": "Lettuce",
            "src": './img/gen/lettuce.png'
        },
        {
            "id": "tomato",
            "v": true,
            "splash": "Tomatoes",
            "src": './img/gen/tomatoes.png'
        },
        {
            "id": "bbeans",
            "v": true,
            "splash": "Black Beans",
            "src": './img/gen/bbeans.png'
        },
        {
            "id": "rbeans",
            "v": true,
            "splash": "Refried Beans",
            "src": './img/gen/rbeans.png'
        },
        {
            "id": "sourcream",
            "v": true,
            "splash": "Sour Cream",
            "src": './img/gen/scream.png'
        },
        {
            "id": "nachocheese",
            "v": true,
            "splash": "Nacho Cheese Sauce",
            "src": './img/gen/nacho.png'
        },
        {
            "id": "red sauce",
            "v": true,
            "splash": "Red Sauce",
            "src": './img/gen/red.png'
        },
        {
            "id": "guac",
            "v": true,
            "splash": "Guacamole",
            "src": './img/gen/guac.png'
        }
    ]
}

const gbutton = document.getElementById("gbutton");
const sbutton = document.getElementById("share");
sbutton.style.visibility = "hidden"; // hide share button by default, is not hidden in html

gbutton.addEventListener("click", generate);

function generate(){
    document.querySelectorAll('.temp').forEach(e => e.remove()) // clear out all images inserted after previous generation
    sbutton.style.visibility="hidden"; // hide share button

    var numProt = document.getElementById("numProt").value;
    var numTopp = document.getElementById("numTopp").value;  
    var myVeg = document.querySelector('input[name=veg]:checked').value; // 2 if vegetarian, 1 if not

    var myBase = ing.base[Math.floor(Math.random() * 6)]; // one of 6 bases selected randomly

    var myProts = [];
    if(myVeg == 2){
        while (numProt) {
            myProts.push(ing.protein[Math.floor(Math.random() * 3)]);   // if veg, fill myProts with numProt items, selected from first 3 (the vegetarian) proteins
            numProt--;
        }
    }
    else{
        while (numProt) {
            myProts.push(ing.protein[Math.floor(Math.random() * 6)]);   // if not veg, select from all proteins
            numProt--;
        }
    }
    var myProtsStr = myProts[0].splash; // myProts listed in format ___, ___, ___
    for (let i = 1; i < myProts.length; i++){
        myProtsStr += ", " + myProts[i].splash;
    }


    var myTopps = [];
    while (numTopp) {
        myTopps.push(ing.topping[Math.floor(Math.random() * 9)]);   // fill myTopps with numTopp items, selected from all toppings
        numTopp--;
    }
    var myToppsStr = myTopps[0].splash; // myTopps listed in format ___, ___, ___
    for (let i = 1; i < myTopps.length; i++){
        myToppsStr += ", " + myTopps[i].splash;     
    }

    document.getElementById("base").innerHTML = "In a " + myBase.splash + ", add the following protiens: " + myProtsStr;
    document.getElementById("topp").innerHTML = "Then, add the following toppings: " + myToppsStr;

    sbutton.style.visibility = "visible";   // show share button. when pressed, copy text to clipboard and update message
    sbutton.addEventListener("click", share);
    function share(){
        navigator.clipboard.writeText("In a " + myBase.splash + ", add the following protiens: " + myProtsStr + ". Then, add the following toppings: " + myToppsStr + ".");
        document.getElementById("stext").innerHTML = "Recipe copied to clipboard"
    }

    for (let i = 0; i < myTopps.length; i++){   // loop through myTopps, append image of each one
        var toppimg = document.createElement('img');
        toppimg.src = myTopps[i].src;
        toppimg.className = "temp";
        document.getElementById('topp0').appendChild(toppimg);
    }

    for (let i = 0; i < myProts.length; i++){   // loop through myProts, append image of each one 
        var protimg = document.createElement('img');
        protimg.src = myProts[i].src;
        protimg.className = "temp";
        document.getElementById('prot0').appendChild(protimg);
    }

    var baseimg = document.createElement('img');    // append base image
    baseimg.src = myBase.src;
    baseimg.className = "temp";
    document.getElementById("base0").appendChild(baseimg);
}

