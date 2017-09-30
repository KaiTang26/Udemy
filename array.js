var movie = [

{ title: "In Bruges",

  rating: 5,

  haveWatched: true
},

{
  title: "Frozen",

  rating: 4.5,

  haveWatched: false

},

{

  title: "Mad Max Fury Road",

  rating: 5,

  haveWatched: true

},



]


function Mrating(ele){

  if(ele.haveWatched){

    console.log("You have watched " + "\""+ele.title+"\""+" - "+ele.rating+" stars")



  }else{

    console.log("You have not seen " + ele.title+" - "+ele.rating+" stars")


  }


}


movie.forEach(Mrating);


