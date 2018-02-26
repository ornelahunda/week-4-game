
$(document).ready(function (){

 // create a random nr between 19-120 
 var random = Math.floor(Math.random()*102)+19;
 $("#computerGuess").text(random);

 // create a random nr for each crystal between 1-12  

var crystal1= Math.floor(Math.random()*12)+1;

var crystal2= Math.floor(Math.random()*12)+1;

var crystal3= Math.floor(Math.random()*12)+1;

var crystal4= Math.floor(Math.random()*12)+1;
  

// create var to store wins and loses
  var wins= 0;
  var losses = 0;
  var total=0;
  $('#wins').text(wins);
  $('#losses').text(losses);
  $('#total').text(total);

  function reset() {
random = Math.floor(Math.random()*102)+19;
    $("#computerGuess").text(random);
crystal1= Math.floor(Math.random()*12)+1;

crystal2= Math.floor(Math.random()*12)+1;

crystal3= Math.floor(Math.random()*12)+1;

crystal4= Math.floor(Math.random()*12)+1;

total=0;
$('#total').text(total);

}

function winner(){
  alert("You won!");
  wins++;
  $("#wins").text(wins);
  reset();
}
function loser(){
  alert("You lose!");
  losses++;
  $("#losses").text(losses);
  reset();
}

// clicking functions
  $("#c1").on("click", function() {
   total+=crystal1;
   $("#total").text(total);
   if (total==random){
     winner();}
     else if (total>random){
       loser();
     }
  });

  $("#c2").on("click", function() {
    total+=crystal2;
    $("#total").text(total);
    if (total==random){
      winner();}
      else if (total>random){
        loser();
      }
   });
  
  $("#c3").on("click", function() {
    total+=crystal3;
    $("#total").text(total);   
    if (total==random){
      winner();}
      else if (total>random){
        loser();
      }
  });

  $("#c4").on("click", function() {
    total+=crystal4;
    $("#total").text(total);
    if (total==random){
      winner();}
      else if (total>random){
        loser();
      }
  });


});
 









//   $("#total").text(scores);
//   $("#game-score").text("Scores");



//   if (scores=120){
//       $("#number").show(scores);
//   }
// else {
//     $("#game-score").text("You lost!");

// }
  //add this numbers
  // if the scores equals var random player wins 
// else player loses