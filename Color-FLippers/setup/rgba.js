const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// function colorGenerator() {
//     return Math.floor(Math.random() * 255);
// }

btn.addEventListener("click", function () { // 

    let rgba = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random().toFixed(1)})`
    document.body.style.backgroundColor = rgba;
    color.innerHTML = rgba;

});





