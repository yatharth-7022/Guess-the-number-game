"use strict";
let randomNumber = Math.trunc(Math.random() * 20);
console.log(randomNumber);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", () => {
  let guessedNumber = Number(document.querySelector(".guess").value);
  if (!guessedNumber) {
    displayMessage("🥲 No number entered");
  } else if (guessedNumber !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guessedNumber > randomNumber ? "📈 Number to high" : "📉 Number too low"
      );

      score--;
      document.querySelector(".score").textContent = score;
    } else displayMessage("🫣 You lost the game");
  } else if (guessedNumber === randomNumber) {
    if (score > 1) {
      displayMessage("🥳🥳 Correct guess!");
      if (highscore < score) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      document.querySelector(".number").textContent = guessedNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    } else displayMessage("🫣 You lost the game");
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  let randomNumber = Math.trunc(Math.random() * 20);
  console.log(randomNumber);
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
});
