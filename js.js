let randomNumber1 = Math.trunc(Math.random() * 6) + 1;
let randomNumber2 = Math.trunc(Math.random() * 6) + 1;

const player1 = document
  .getElementsByTagName("img")[0]
  .setAttribute("src", `images/dice${randomNumber1}.png`);
const player2 = document
  .getElementsByTagName("img")[1]
  .setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
