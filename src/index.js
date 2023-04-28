import "./style.css";
import Player from "./factories/Player";
import Gameboard from "./factories/Gameboard";
// import Ship from "./factories/Ship";

const player = Player();
const playerGameboard = Gameboard();

const AiPlayer = Player();
const AiGameboard = Gameboard();

function makePlayerMove() {
  const xCord = this.dataset.x;
  const yCord = this.dataset.y;
  player.playerTurn(playerGameboard, xCord, yCord);

  setTimeout(() => {
    makeAiMove();
  }, 1000);
}

function makeAiMove() {
  AiPlayer.AiTurn(AiGameboard);
}

playerGameboard.createShip(5, [0, 1, 2, 3, 4], [0, 0, 0, 0, 0]);
playerGameboard.createShip(4, [2, 2, 2, 2], [2, 3, 4, 5]);
playerGameboard.createShip(3, [4, 5, 6], [6, 6, 6]);
playerGameboard.createShip(3, [7, 8, 9], [8, 8, 8]);
playerGameboard.createShip(2, [9, 9], [4, 5]);
playerGameboard.placeShips();

// const playerGameboardDivs = document.querySelectorAll("#player-board div");

AiGameboard.createShip(5, [0, 1, 2, 3, 4], [0, 0, 0, 0, 0]);
AiGameboard.createShip(4, [2, 2, 2, 2], [2, 3, 4, 5]);
AiGameboard.createShip(3, [4, 5, 6], [6, 6, 6]);
AiGameboard.createShip(3, [7, 8, 9], [8, 8, 8]);
AiGameboard.createShip(2, [9, 9], [4, 5]);
// AiGameboard.placeShips('enemy-board');

const AiGameboardDivs = document.querySelectorAll("#enemy-board div");
AiGameboardDivs.forEach((div) => {
  div.addEventListener("click", makePlayerMove);
});
