function distribute(candies){

  candies.sort(function(a,b){

    return a-b;

  })


  var test =0;

  if(candies[candies.length-1]==0){

    test=1;
  }


  var itemCount=0;

  var typeCount=0;





  for(var i=candies.length-1; i>=0; i--){

    if(test!==candies[i]&&itemCount<candies.length/2){

      itemCount++;

      typeCount++;

      test=candies[i];

    }

  }

  return typeCount;




  //return candies.length/2;


}


console.log(distribute([0,0,0,0,0,0,0,0]));