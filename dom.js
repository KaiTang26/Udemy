
var highLight =document.getElementById("highlight");

var bolded = document.getElementsByClassName("bolded");

var li =document.getElementsByTagName("li");

var l1 =document.querySelectorAll("li");

var button =document.querySelector("button");

var body =document.querySelector("body");

var isWhite =true;


button.addEventListener("click", function(){

  if(isWhite){

    // isWhite=false;

    body.style.backgroundColor = "red";

  }else{

    // isWhite=true;

    body.style.backgroundColor = "white";


  }

  isWhite = !isWhite;






})






li[0].textContent="hahaha";













