

var comt =prompt("type \"new\" , \" list\",\"remove\" or \"quit\" ");

var item =[];



while(true){

if(comt==="new"){


  var newI =prompt("input activty")

  item.push(newI);

  var comt =prompt("type \"new\" , \" list\",\"remove\" or \"quit\" ");

}else if(comt ==="list"){



  item.forEach(function(value, num){


    alert(num + " : " +value)

  })



  var comt =prompt("type \"new\" , \" list\",\"remove\" or \"quit\" ");

}else if(comt ==="quit"){


  alert("Thanks for useing");

  break;




}else if(comt==="remove"){


var rm =prompt("please input the index, which you want to remove")

item.splice(rm,1);

var comt =prompt("type \"new\" , \" list\",\"remove\" or \"quit\" ");



}else{

  var comt =prompt("type \"new\" , \" list\",\"remove\" or \"quit\" ");
}

}