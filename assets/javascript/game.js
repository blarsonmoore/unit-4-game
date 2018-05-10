


$(document).ready(function () {

  var randomNumber = Math.floor(Math.random() * 101+19);
  $("#random-number").text(randomNumber);

  var gameScore = 0;
  var winCount = 0;
  var lossCount = 0;

  var crystals = [0, 1, 2, 3];

  for (var i = 0; i < crystals.length; i++) {
    var random = Math.floor(Math.random() * 12) + 1;
    crystals[i] = random;
    console.log(crystals[i]);
  }
 

  $("#win-count").text(winCount);
  $("#loss-count").text(lossCount);

  function reset() {
    randomNumber = Math.floor(Math.random() * 101+19);
      $("#random-number").text(randomNumber);

    crystals = [0, 1, 2, 3];
      for (var i = 0; i < crystals.length; i++) {
        var random = Math.floor(Math.random() * 12) + 1;
        crystals[i] = random;
        console.log(crystals[i]);
      }
      gameScore = 0;
      $("#player-score").text(gameScore);
    }
  

  function win() {
    alert("Winner!");
    winCount++;
    $("#win-count").text(winCount);
    reset();
  }

  function loss() {
    alert("You Lose! Try Again.");
    $("#loss-count").text(lossCount);
    lossCount++;
    reset();
  }


  $("#crystal-one").on("click", function () {
    var click = crystals[0];
    $("#player-score").text(crystals[0] + gameScore);
    gameScore = gameScore + click;
    if (gameScore == randomNumber) {
      win();
    }
    else if (gameScore > randomNumber) {
      loss();
    }
  });

  $("#crystal-two").on("click", function () {
    var click = crystals[1];
    $("#player-score").text(crystals[1] + gameScore);
    gameScore = gameScore + click;
    if (gameScore == randomNumber) {
      win();
    }
    else if (gameScore > randomNumber) {
      loss();
    }
  });

  $("#crystal-three").on("click", function () {
    var click = crystals[2];
    $("#player-score").text(crystals[2] + gameScore);
    gameScore = gameScore + click;
    if (gameScore == randomNumber) {
      win();
    }
    else if (gameScore > randomNumber) {
      loss();
    }
  });

  $("#crystal-four").on("click", function () {
    var click = crystals[3];
    $("#player-score").text(crystals[3] + gameScore);
    gameScore = gameScore + click;
    if (gameScore == randomNumber) {
      win();
    }
    else if (gameScore > randomNumber) {
      loss();
    }
  });
});

