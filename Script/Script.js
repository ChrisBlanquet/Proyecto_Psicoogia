document.querySelector(".bars__menu").addEventListener("click",animatebars);
var  line1__bars = document.querySelector(".line1__bars-menu");
var  line2__bars = document.querySelector(".line2__bars-menu");
var  line3__bars = document.querySelector(".line3__bars-menu");
var menu__navegacion= document.querySelector(".main-responsive");

function animatebars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    menu__navegacion.classList.toggle("active-main-responsive");
}