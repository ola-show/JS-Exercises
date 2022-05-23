//TARGET THE BTN
const btn = document.getElementById("btn");
//TARGET THE COLOR CLASS
const color = document.querySelector(".color");
// DECLARE FUNCTION NAMED colorGenerator
function colorGenerator() {
    //CODE TO BE EXECUTED
    //CALLING FUNCTION/INVOKE FUNCTION
    return Math.floor(Math.random() * 255);
}

// WHEN THE BUTTON IS CLICKED START THE FUNCTION
btn.addEventListener("click", function() { //

    // let colorGenerator = Math.floor(Math.random() * 255);

    let rgba = `rgba(${colorGenerator()}, ${colorGenerator()}, ${colorGenerator()}, ${Math.random().toFixed(1)})`
    document.body.style.backgroundColor = rgba;
    color.innerHTML = rgba;

});