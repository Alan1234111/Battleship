import "./style.css";
// import Player from "./factories/Player";
import Gameboard from "./factories/Gameboard";
// import Ship from "./factories/Ship";

function attack(gameboard, div) {
  gameboard.receiveAttack(div.dataset.x, div.dataset.y);
  if (gameboard.isAllShipSunk()) {
    console.log("sds");
  }
}

// const player = Player();
const playerGameboard = Gameboard();
playerGameboard.createShip(5, [0, 1, 2, 3, 4], [0, 0, 0, 0, 0]);
playerGameboard.createShip(4, [2, 2, 2, 2], [2, 3, 4, 5]);
playerGameboard.createShip(3, [4, 5, 6], [6, 6, 6]);
playerGameboard.createShip(3, [7, 8, 9], [8, 8, 8]);
playerGameboard.createShip(2, [9, 9], [4, 5]);
playerGameboard.placeShips();

const playerGameboardDivs = document.querySelectorAll("#player-board div");
playerGameboardDivs.forEach((div) => {
  div.addEventListener("click", () => {
    attack(playerGameboard, div);
  });
});

// const Ai = Player();
const AiGameboard = Gameboard();
AiGameboard.createShip(5, [0, 1, 2, 3, 4], [0, 0, 0, 0, 0]);
AiGameboard.createShip(4, [2, 2, 2, 2], [2, 3, 4, 5]);
AiGameboard.createShip(3, [4, 5, 6], [6, 6, 6]);
AiGameboard.createShip(3, [7, 8, 9], [8, 8, 8]);
AiGameboard.createShip(2, [9, 9], [4, 5]);
AiGameboard.placeShips();

const AiGameboardDivs = document.querySelectorAll("#enemy-board div");
AiGameboardDivs.forEach((div) => {
  div.addEventListener("click", () => {
    attack(AiGameboard, div);
  });
});
