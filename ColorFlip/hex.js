const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const logo = document.getElementById("logo");
const color = document.querySelector(".clr");

btn.addEventListener('click', function(){

    let hexcode = "#";
    for(let i=0; i<6; i++){
        const randomIndex = getRandomNumber();
        hexcode += colors[randomIndex];
    }
    document.body.style.backgroundColor = hexcode;
    color.textContent = hexcode;
    // color.style.color = hexcode;
    logo.style.color = hexcode;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)  ;
}

