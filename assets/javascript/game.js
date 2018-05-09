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


// var crystals = ["crystalOne", "crystalTwo", "crystalThree", "crystalFour"];

// for (var i = 0; i < crystals.length; i++){
//   var random = Math.floor(Math.random() * 12) + 1;
//   $(".img-thumbnail").on("click", function(){
//     var crystalOne = (crystals[0]);
//   crystals[i] = random;
//   console.log(random);
//   });
// }

// $("#crystal-one").on("click", function(){
//   var crystalOne = (crystals[0]);
//   console.log(crystalOne);
//   gameScore += crystalOne;
//     console.log(gamscore);
// });
// $("#crystal-two").on("click", function(){
//   var crystalTwo = (crystals[1]);
//   console.log(crystalTwo);
// });
// $("#crystal-three").on("click", function(){
//   var crystalThree = (crystals[2]);
//   console.log(crystalThree);
// });
// $("#crystal-four").on("click", function(){
//   var crystalFour = (crystals[3]);
//   console.log(crystalFour);
// });

   
  



  var crystals = [0, 1, 2, 3];

for (var i = 0; i < crystals.length; i++){
  var random = Math.floor(Math.random() * 12) + 1;
  crystals[i] = random;

  console.log(random);
}
// $("#crystal-one").val(crystals[0]);
// $("#crystal-two").val(crystals[1]);
// $("#crystal-three").val(crystals[2]);
// $("#crystal-four").val(crystals[3]);

$("#crystal-one").on("click", function(){
  var click = crystals[0];
  $("#player-score").text(crystals[0] + gameScore);
  gameScore += click;
});

$("#crystal-two").on("click", function(){
  var click = crystals[1];
  $("#player-score").text(crystals[1] + gameScore);
  gameScore += click;
});

$("#crystal-three").on("click", function(){
  var click = crystals[2];
  $("#player-score").text(crystals[2] + gameScore);
  gameScore += click;
});

$("#crystal-four").on("click", function(){
  var click = crystals[3];
  $("#player-score").text(crystals[3] + gameScore);
  gameScore += click;
});
console.log(crystals[0]);

// $("#crystal-two").on("click").val(crystals[1]);
console.log(crystals[1]);

// $("#crystal-three").on("click").val(crystals[2]);
console.log(crystals[2]);

// $("#crystal-four").on("click").val(crystals[3]);
console.log(crystals[3]);




//   gameScore += value;

//   console.log(gameScore);

  
// // $("#crystal-two").on("click", function(){
// //   var value2 = (crystals[1]);
// //   gameScore += value2;

//   $("#player-score").text(gameScore);

// });

});