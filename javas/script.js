var obyekt = document.getElementById("obyekt");
var sekil = document.getElementById("sekil");
var a= "5px solid black";
var borderless ="none";

obyekt.addEventListener("click", function (){
    border(a, 2000, bigger, backborder)
})

function border(a, second, callback, backborder) {
    var settime = setTimeout( function() { 
        obyekt.style.border=a;
    }, second)
    callback(400, 400, 5000, backborder);
    clear();
}

function bigger (width, height, new_second, backborder) {
    var settime = setTimeout(
    function(){
        sekil.style.width = width +"px";
        sekil.style.height = height + "px";
    }, new_second)
    backborder(borderless, 50, 50)
}
function backborder(borderless, width, height) {
        obyekt.style.border = borderless;
}
