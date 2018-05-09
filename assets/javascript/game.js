var randomNumber = "";
var gameScore = 0;

var winCount = 0;
var lossCount = 0;


$(document).ready(function () {

  var winCount = 0;
  var lossCount = 0;

  function randomNumber(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  $("#random-number").html(randomNumber);

  // var randomCrystalOne = Math.floor(Math.random() * 12) + 1;
  // var randomCrystalTwo = Math.floor(Math.random() * 12) + 1;
  // var randomCrystalThree = Math.floor(Math.random() * 12) + 1;
  // var randomCrystalFour = Math.floor(Math.random() * 12) + 1;

var crystals = [0, 1, 2, 3];

for (var i = 0; i < crystals.length; i++){
  var random = Math.floor(Math.random() * 12) + 1;
  crystals[i] = random;
}
console.log(crystals);


$("#crystal-one").on("click", function(){
  var value1 = (crystals[0]);
  gameScore += value1;
});
  console.log(gameScore);

  
$("#crystal-two").on("click", function(){
  var value2 = (crystals[1]);
  gameScore += value2;
});
  $("#player-score").text(gameScore);


});

