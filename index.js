const buttonColours = ["red", "green", "blue", "yellow"];
let gamePattern = [];

let x = 0;

function boxPlay(color) {
  let src;
  switch (color) {
    case "red":
      src = "./sounds/red.mp3";
      break;
    case "green":
      src = "./sounds/green.mp3";
      break;
    case "blue":
      src = "./sounds/blue.mp3";
      break;
    case "yellow":
      src = "./sounds/yellow.mp3";
      break;
  }
  const audio = new Audio(src);
  audio.play();
  $(`#${color}`).fadeOut(100).fadeIn(100);
}
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  boxPlay(randomChosenColour);
}
$(document).on("click", () => {
  if (x > 0) return;
  x++;
  nextSequence();
});
