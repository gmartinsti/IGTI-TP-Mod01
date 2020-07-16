//var body = document.body,
window.addEventListener('load', start)
function start() {
var input = document.querySelectorAll('input');
let inputText = document.querySelectorAll("input[type='text']");

for (var i =0; i <input.length; i++) { 
    input[i].addEventListener('input', function(){ 
        var red = document.getElementById('r').value
         var green = document.getElementById('g').value
         var blue = document.getElementById('b').value
         //console.log(blue)
        var display = document.getElementById("mostrarcor")
        display.style.background = `rgb(${red},${green},${blue})`
    inputText[0].value = red
    inputText[1].value = green
    inputText[2].value = blue
    inputText[3].value = `rgb(${red},${green},${blue})`
    //`rgb(${red},${green},${blue})`

    })
}
}