const buttonColors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

function game() {
  $("#level-title").text("Level " + level);
  nextSequence();
}
$(".btn").on("click", function () {
  const userChosenColors = $(this).attr("id");
  userClickedPattern.push(userChosenColors);
  playSound(userChosenColors);
  animatePress($(this));
  checkAnswer(userClickedPattern.length - 1);
});

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function playSound(name) {
  const audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

function animatePress(element) {
  element.addClass("pressed");
  setTimeout(() => {
    element.removeClass("pressed");
  }, 100);
}
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("succes");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColors = buttonColors[randomNumber];
  console.log(randomChosenColors);
  gamePattern.push(randomChosenColors);
  $(`#${randomChosenColors}`).fadeOut(100).fadeIn(100).fadeIn(100);
  playSound(randomChosenColors);
  level += 1;
  $("#level-title").text(`Level ${level}`);
}

$(document).on("keydown", () => {
  if (started) return;
  game();
  started = true;
});
