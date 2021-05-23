$(document).ready(function(){

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
            $("header").addClass("header2");
        }else{
            $("header").removeClass("header2");
        }
    });
});




var btn = document.getElementById("btn");

function Funcion(){
    location.href = "lamparadeescritorio.html";
}
function Funcion2(){
    location.href = "lamparadetecho.html";
}
function Funcion3(){
    location.href = "lamparadearaña.html";
}
function Funcion4(){
    location.href = "lamparadepie.html";
}
function Funcion5(){
    location.href = "lamparadepared.html";
}
function Funcion6(){
    location.href = "lamparadevolcan.html";
}

