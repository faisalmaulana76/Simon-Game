const buttonColors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let x = 0;
let level = 0;

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
    }
  } else {
    console.log("wrong");
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
$(".btn").on("click", function () {
  const userChosenColors = $(this).attr("id");
  userClickedPattern.push(userChosenColors);
  playSound(userChosenColors);
  animatePress($(this));
  checkAnswer(userClickedPattern.length - 1);
});

$(document).on("click", () => {
  if (x > 0) return;
  x++;
  nextSequence();
});

$(document).on("keydown", () => {
  if (x > 0) return;
  x++;
  nextSequence();
});
