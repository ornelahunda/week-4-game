 // create a random nr between 19-120 ,(var random)
    
 random = Math.floor(Math.random()*102)+19;
           
 $("#computerGuess").text(random);
 // create a random nr for each crystal 1-12 (crystalRandom)

crystal1= Math.floor(Math.random()*12)+1;
crystal2= Math.floor(Math.random()*12)+1;
crystal3= Math.floor(Math.random()*12)+1;
crystal4= Math.floor(Math.random()*12)+1;
  // there are 4 differnt crystals
  // when click a crystal generates a number 1-12, variable scores
  var scores=0;


 
  $("#c1").on("click", function() {
      alert("I got clicked!");
      scores+=crystal1;
  });

  $("#c1").on("click",".btn", function() {
      scores+=crystal2;
  });

  $("#c1").on("click",".btn", function() {
      scores+=crystal3;
  });

  $("#c1").on("click",".btn", function() {
      scores+=crystal4;
  });

  $("#number").text(scores);
  $("#game-score").text("Scores");

//   if (scores=120){
//       $("#number").show(scores);
//   }
// else {
//     $("#game-score").text("You lost!");

// }
  //add this numbers
  // if the scores equals var random player wins 
// else player loses