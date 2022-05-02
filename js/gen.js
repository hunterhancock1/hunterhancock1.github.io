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

gbutton.addEventListener("click", generate);

function generate(){
    var elements = document.getElementsByClassName("temp");
    if (elements == null) { console.log("No elements, first generation?"); }
    else { elements.parentNode.removeChild(elements); }

    var numProt = document.getElementById("numProt").value;
    var numTopp = document.getElementById("numTopp").value;  
    var myVeg = document.querySelector('input[name=veg]:checked').value;

    //window.location.reload();

    var myBase = ing.base[Math.floor(Math.random() * 6)]; 

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

    document.getElementById("base").innerHTML = "In a " + myBase.splash + ":";

    document.getElementById("prot").innerHTML = "Add the following protiens: ";
    document.getElementById("prot").innerHTML += myProtsStr;

    document.getElementById("topp").innerHTML = "Then, add the following toppings: ";
    document.getElementById("topp").innerHTML += myToppsStr;

    for (let i = 0; i < myTopps.length; i++){
        var toppimg = document.createElement('img');
        toppimg.src = myTopps[i].src;
        toppimg.className = "temp";
        document.getElementById('topp0').appendChild(toppimg);
    }

    for (let i = 0; i < myProts.length; i++){
        var protimg = document.createElement('img');
        protimg.src = myProts[i].src;
        protimg.className = "temp";
        document.getElementById('prot0').appendChild(protimg);
    }

    var baseimg = document.createElement('img');
    baseimg.src = myBase.src;
    baseimg.className = "temp";
    document.getElementById("base0").appendChild(baseimg);
}

