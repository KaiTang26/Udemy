function findWords(words){

  var set=["qwertyuiop","asdfghjkl","zxcvbnm"];

  var ans=[];

  words.forEach(function(ele){

    var letter =ele.toLowerCase();

    set.forEach(function(sets){

      var flag=true;

      for(var i=0; i<letter.length;i++){

        if(sets.indexOf(letter[i])===-1){

          flag=false;

        }

      }

      if(flag){

        ans.push(ele);

      }

    })

  })

  return ans;

}


console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));