var arrayPairSum =function(nums){



  nums.sort(function(a,b){

    return a-b;

  })

   var sum =0;

  nums.forEach(function(ele,idx){

    if(idx%2===0){

      sum+=ele;

    }




  })

  return sum;

}


console.log(arrayPairSum([1,4,3,2]));