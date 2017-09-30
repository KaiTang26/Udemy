
var fp =document.querySelector("#fp");

var limit =document.querySelector("#limit");

var sp =document.querySelector("#sp");

var b1 =document.querySelector("#b1");

var b2 =document.querySelector("#b2");

var b3 =document.querySelector("#b3");

var value =5;

function getComboA(selectObject) {
    value = selectObject.value;

    limit.textContent=value;

}

var i =1;

b1.addEventListener("click", function(){

  if(i<value && sp.textContent<value){

    fp.textContent=i;

   i++;

  }else if(i==value && sp.textContent<value){

    fp.textContent=value;
    fp.style.color="green"

  }else{


  }

});

var j =1;

b2.addEventListener("click", function(){

  if(j<value && fp.textContent<value){

    sp.textContent=j;

   j++;

  }else if(j==value && fp.textContent<value){

    sp.textContent=value;
    sp.style.color="green"

  }else{


  }

});

b3.addEventListener("click", function(){

  fp.textContent="0";

  sp.textContent="0";

  i=1;

  j=1;

  fp.style.color="black"

  sp.style.color="black"

});




















