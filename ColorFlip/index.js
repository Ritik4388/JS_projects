const colors = ["AliceBlue","Aqua", "Bisque","Brown", "CadetBlue", "Coral", "CornflowerBlue", "Crimson", "Cornsilk",
                "Cyan","DarkBlue", "DarkCyan", "DarkGoldenRoad", "DarkGray", "DarkOliveGreen", "DarkSeaGreen",
            "DarkViolet", "DeepSkyBlue", "DimGray", "FireBrick", "ForestGreen", "Gainsboro", "Gold", "GreenYellow",
        "IndianRed", "Indigo", "Khaki", "LightCoral","LightBlue", "LightSeaGreen", "LightPink", "lightSalmon","LightSteelBlue",
    "MediumPurple", "MidnightBlue","Navy", "Olive","OliveDrab", "Orange", "PaleVioletRed","Peru", "RosyBrown", "RoyalBlue"];

const btn = document.getElementById("btn");
const logo = document.getElementById("logo");
const color = document.querySelector(".clr");

btn.addEventListener('click', function(){
    const randomIndex = getRandomNumber();
    document.body.style.backgroundColor = colors[randomIndex];
    color.textContent = colors[randomIndex];
    // color.style.color = colors[randomIndex];
    logo.style.color = colors[randomIndex];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)  ;
}


