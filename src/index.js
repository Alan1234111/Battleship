import "./style.css";
import Player from "./factories/Player";
import Gameboard from "./factories/Gameboard";

const player = Player();
const playerGameboard = Gameboard();
const aiGameboard = Gameboard();

function createAndPlaceShips(gameboard, shipData) {
  shipData.forEach((data) => {
    const [size, xCoords, yCoords] = data;
    gameboard.createShip(size, xCoords, yCoords);
  });
  gameboard.placeShips();
}

createAndPlaceShips(playerGameboard, [
  [5, [0, 1, 2, 3, 4], [0, 0, 0, 0, 0]],
  [4, [2, 2, 2, 2], [2, 3, 4, 5]],
  [3, [4, 5, 6], [6, 6, 6]],
  [3, [7, 8, 9], [8, 8, 8]],
  [2, [9, 9], [4, 5]],
]);

createAndPlaceShips(aiGameboard, [
  [5, [0, 1, 2, 3, 4], [0, 0, 0, 0, 0]],
  [4, [2, 2, 2, 2], [2, 3, 4, 5]],
  [3, [4, 5, 6], [6, 6, 6]],
  [3, [7, 8, 9], [8, 8, 8]],
  [2, [9, 9], [4, 5]],
]);

function handleAiGameboardClick() {
  player.playerTurn(playerGameboard, this, this.dataset.x, this.dataset.y);

  if (player.turn !== "player") {
    player.turn = "player";
    player.AiTurn(aiGameboard);
  }
}

const aiGameboardDivs = document.querySelectorAll("#enemy-board div");
aiGameboardDivs.forEach((div) => {
  div.addEventListener("click", handleAiGameboardClick);
});
