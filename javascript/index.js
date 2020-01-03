var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var leftDie = document.querySelector(".player1 img");
var rightDie = document.querySelector(".player2 img");

leftDie.setAttribute("src", "images/dice" + randomNumber1 + ".png");
rightDie.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
else if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
  document.querySelector(".flag1").style.display = "inline-block";
}
else {
  document.querySelector("h1").textContent = "Player 2 Wins!";
  document.querySelector(".flag2").style.display = "inline-block";
}
