let date =  new Date("1 Jan 2023");

function convert(){
    const diff = date - new Date();
    const totSeconds = (diff/1000);
    const days = Math.floor((totSeconds/3600)/24);
    const hours = Math.floor((totSeconds/3600)%24);
    const minutes = Math.floor((totSeconds/60)%60);
    const seconds = Math.floor((totSeconds)%60);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

}
convert();
setInterval(convert, 1000);
