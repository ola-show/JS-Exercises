const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function colorGenerator() {
    return Math.floor(Math.random() * 255);
}


btn.addEventListener("click", function () { // 

    // let colorGenerator = Math.floor(Math.random() * 255);

    let rgba = `rgba(${colorGenerator()}, ${colorGenerator()}, ${colorGenerator()}, ${Math.random().toFixed(1)})`
    document.body.style.backgroundColor = rgba;
    color.innerHTML = rgba;

});





