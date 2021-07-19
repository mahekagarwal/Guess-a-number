"use strict;";
let randomNumber = Math.floor(Math.random() * 20) + 1;
let inputNumber;
let score = 20;
let highscore = 0;
document.getElementById("checkbtn").addEventListener("click", function () {
  inputNumber = Number(document.getElementsByClassName("guess")[0].value);
  if (!inputNumber) {
    document.getElementsByClassName("message")[0].textContent = "Wrong number!";
  } else if (inputNumber === randomNumber) {
    document.getElementsByClassName("number")[0].textContent = inputNumber;
    document.getElementsByClassName("message")[0].textContent =
      "Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.getElementsByClassName("number")[0].style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.getElementsByClassName("highscore")[0].textContent = highscore;
    }
    document.getElementsByClassName("guess")[0].value = "";
  } else if (inputNumber !== randomNumber) {
    document.getElementsByClassName("message")[0].textContent =
      inputNumber > randomNumber ? "Too high!" : "Too low!";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.getElementsByClassName("message")[0].textContent =
        "You lost! try again";
      document.getElementsByClassName("guess")[0].value = "";
    }
  }
});

document.getElementById("againbtn").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.getElementsByClassName("message")[0].textContent =
    "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.getElementsByClassName("number")[0].textContent = "?";
  document.getElementsByClassName("guess")[0].value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
