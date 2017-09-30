function reverseWords(s){

  var wordList=s.split(" ");

  for(var i = 0;i < wordList.length;i++){

    wordList[i]=wordList[i].split("").reverse().join("");


    }


    return wordList.join(" ");


}



console.log(reverseWords("Let's take LeetCode contest"));