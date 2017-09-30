function reverseWords(s){

  var wordList=s.split(" ");

  var ans1="";

  wordList.forEach(function(ele){

    var item="";

    for(var i=ele.length-1;i>=0;i--){

      item +=ele[i]

    }

    ans1+=item+" ";

  })

  var j=ans1.length-1

  var ans=ans1.slice(0,j)

  return ans;

}


console.log(reverseWords("Let's take LeetCode contest"))

