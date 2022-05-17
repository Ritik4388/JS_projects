let count = 0;

const btns = document.querySelectorAll(".btn");

const value = document.querySelector('#target');

btns.forEach(function(btn){
    btn.addEventListener('click', function(event){
        const tar = event.currentTarget.classList;
        if(tar.contains("decrease")){
            count--;
        }else if(tar.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        value.textContent = count;
        if(count > 0) value.style.color = "green";
        else if(count < 0) value.style.color = "red";
        else value.style.color = "black";
    })
})