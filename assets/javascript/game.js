var randomNumber = "";
var gameScore = 0;
var winCount = 0;
var lossCount = 0;
var output = "";
var userClick = "";


$(document).ready(function () {

  function randomNumber(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  $("#random-number").html(randomNumber);

  var crystals = [0, 1, 2, 3];

for (var i = 0; i < crystals.length; i++){
  var random = Math.floor(Math.random() * 12) + 1;
  crystals[i] = random;

  console.log(random);
}

$(".container").on("click", ".img-thumbnail", function () {
  
 
  if ($(".img-thumbnail").value == A) {
    $("#player-score").text(crystals[0] + gameScore);
  }
  // if (this.value === output) {
  //   $("#player-score").text(crystals[1] + gameScore);
  // }
  // if (this.value === output) {
  //   $("#player-score").text(crystals[2] + gameScore);
  // }
  // if (this.value === output) {
  //   $("#player-score").text(crystals[3] + gameScore);
  // }




// $("#crystal-one").on("click", function(){
//   var click = crystals[0];
//   $("#player-score").text(crystals[0] + gameScore);
//   gameScore += click;
// });
// $("#crystal-two").on("click", function(){
//   var click = crystals[1];
//   $("#player-score").text(crystals[1] + gameScore);
//   gameScore += click;
// });

// $("#crystal-three").on("click", function(){
//   var click = crystals[2];
//   $("#player-score").text(crystals[2] + gameScore);
//   gameScore += click;
// });

// $("#crystal-four").on("click", function(){
//   var click = crystals[3];
//   $("#player-score").text(crystals[3] + gameScore);
//   gameScore += click;
// });
 
if (gameScore === randomNumber) {
  alert("You Win");
}

});
});

