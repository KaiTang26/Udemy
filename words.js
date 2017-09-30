function findWords(words){

  var set1 = new Set(["q","w","e","r","t","y","u","i","o","p","Q","W","E","R","T","Y","U","I","O","P"]);

  var set2 = new Set(["a","s","d","f","g","h","j","k","l","A","S","D","F","G","H","J","K","L"]);

  var set3 = new Set(["z","x","c","v","b","n","m","Z","X","C","V","B","N","M"]);

  var ans =[];




  words.forEach(function(ele){

    if(set1.has(ele[0])){

      var item1=0


      for(var i=1; i<ele.length; i++){

        if(!set1.has(ele[i])){

          item1++;

        }

      }

      if(item1===0){

        ans.push(ele);

      }



    }else if(set2.has(ele[0])){

      var item2=0;


      for(var i=1; i<ele.length; i++){

        if(!set2.has(ele[i])){

          item2++;

        }

      }

      if(item2===0){

        ans.push(ele);

      }




    }else if(set3.has(ele[0])){

      var item3=0;

      for(var i=1; i<ele.length; i++){

        if(!set3.has(ele[i])){

          item3++;

        }

      }

      if(item3===0){

        ans.push(ele);

      }




    }

  })


  return ans;










}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));






