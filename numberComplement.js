function findComplement(num){


  var bin =num.toString(2);


  var newBin ="0";

  for(var i=0; i<bin.length; i++){

    if(Number(bin[i])===0){

      newBin +="1";


    }else if(Number(bin[i])===1){


      newBin +="0";
    }

  }


  var newNum =parseInt(newBin, 2)


  return newNum;



 }




 console.log(findComplement(2147483646));