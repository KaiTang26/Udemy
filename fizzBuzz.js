function fizzBuzz(n){


  var ans=[];

  for(var i=1; i<=n; i++){

    if(i%3===0 && i%5!==0){

      ans.push("Fizz");


    }else if(i%3!==0 && i%5===0){

      ans.push("Buzz");



    }else if(i%3===0 && i%5===0){

      ans.push("FizzBuzz");



    }else{

      ans.push(i.toString());



    }



  }

  return ans;


}


console.log(fizzBuzz(15));