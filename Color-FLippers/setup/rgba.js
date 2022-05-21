// target the button
const btn = document.getElementById("btn");
// target the color text element
const color = document.querySelector(".color");

// function colorGenerator() {
//     return Math.floor(Math.random() * 255);
// }

// create and event listener for the button
btn.addEventListener("click", function () { // Higher order function
    // let colorGenerator = Math.floor(Math.random() * 255);

    let rgba = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()}`
    document.body.style.backgroundColor = rgba;

});





