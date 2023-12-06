
var main= document.querySelector("#main");
var image = document.querySelector("#page>img");

main.addEventListener("mousemove",function(dts){
    image.style.top=1-dts.y*0.05+"px"
    image.style.left=1-dts.x*0.05+"px"
})