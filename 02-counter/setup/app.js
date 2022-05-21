let count = 0;
<<<<<<< HEAD
/*const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
=======*/

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;
        if (style.contains("decrease")) {
            count--;
        } else if (style.contains("increase")) {
            count++;
            value.style.color = "green";
        } else {
            count = 0;
            value.style.color = "black";
        }
        value.innerHTML = count;

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
    })
});
/*
>>>>>>> 1068229993310ebf9ed6a0a02d06a59d731cf14d

btns.forEach(function(btn){
    btns.addEventListener("click",function(e){
        const style = e.currentTarget.classList;
        if (style.contains("decrease")){
            count--;
        }else if(style.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        //changing counter color 

        if(count< 0){
            value.style.color= "red";
        }if(count>0){
            value.style.color ="green";
        }if(count == 0){
            value.style.color ="black";
        }
    })
})*/
