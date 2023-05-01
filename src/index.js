import "./style.css";
import Player from "./factories/Player";
import Gameboard from "./factories/Gameboard";

const player = Player();
const playerGameboard = Gameboard();
const aiGameboard = Gameboard();
const wall = document.querySelector(".wall");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".win-info");
const closeBtn = document.querySelector(".close-button");
const randomBoardBtn = document.getElementById("random");
const resetBoardBtn = document.getElementById("reset");
const aiGameboardDivs = document.querySelectorAll("#enemy-board div");
const playerGameboardDivs = document.querySelectorAll("#player-board div");
const startButton = document.getElementById("start");
const enemyGameboardDiv = document.getElementById("enemy-board");

function verticallyOrHorizontally() {
  const postion = Math.floor(Math.random() * 2);

  if (postion) {
    return "verticaly";
  } else {
    return "horizontaly";
  }
}

function randomShipCoords(length, gameboard) {
  let xCordFirst;
  let yCordFirst;
  let isTheSame = false;
  const xCoords = [];
  const yCoords = [];

  do {
    xCordFirst = Math.floor(Math.random() * (10 - length + 1));
    yCordFirst = Math.floor(Math.random() * (10 - length + 1));

    isTheSame = gameboard.ships.forEach((ship) => {
      let isXTheSame = ship.xCords.forEach((cord) => cord === xCordFirst);
      let isYTheSame = ship.yCords.forEach((cord) => cord === yCordFirst);
      return isXTheSame && isYTheSame;
    });
  } while (isTheSame);

  if (verticallyOrHorizontally() === "verticaly") {
    for (let i = 0; i < length; i++) {
      xCoords.push(xCordFirst);
      yCoords.push(yCordFirst + i);
    }
    gameboard.createShip(length, xCoords, yCoords);
  } else {
    for (let i = 0; i < length; i++) {
      xCoords.push(xCordFirst + i);
      yCoords.push(yCordFirst);
    }
    gameboard.createShip(length, xCoords, yCoords);
  }
}

function resetBoard() {
  playerGameboardDivs.forEach((div) => {
    div.classList = "";
  });
  aiGameboardDivs.forEach((div) => {
    div.classList = "";
  });

  aiGameboard.ships.length = 0;
  aiGameboard.recordedShots.length = 0;
  playerGameboard.ships.length = 0;
  playerGameboard.recordedShots.length = 0;

  enemyGameboardDiv.classList.add("before-start");
  startButton.classList.remove("hide");
  randomBoardBtn.classList.remove("hide");
}

function renderAiBoard() {
  randomShipCoords(5, aiGameboard);
  randomShipCoords(4, aiGameboard);
  randomShipCoords(3, aiGameboard);
  randomShipCoords(3, aiGameboard);
  randomShipCoords(2, aiGameboard);
}

function renderRandomBoard() {
  resetBoard();
  randomShipCoords(5, playerGameboard);
  randomShipCoords(4, playerGameboard);
  randomShipCoords(3, playerGameboard);
  randomShipCoords(3, playerGameboard);
  randomShipCoords(2, playerGameboard);
  playerGameboard.placeShips();
  startButton.addEventListener("click", startTheGame, {once: true});
}

function handleAiGameboardClick() {
  player.playerTurn(aiGameboard, this, this.dataset.x, this.dataset.y);

  if (player.turn !== "player") {
    player.turn = "player";
    player.AiTurn(playerGameboard);
  }

  if (playerGameboard.isAllShipSunk()) {
    showWinner("You Lost! Maybe the next time");
  }

  if (aiGameboard.isAllShipSunk()) {
    showWinner("Congratulations! You Win!");
  }
}

const showWinner = (text) => {
  wall.classList.remove("hide");
  modal.classList.remove("hide");
  modalText.textContent = text;
};

const reset = () => {
  wall.classList.add("hide");
  modal.classList.add("hide");
  resetBoard();
};

function startTheGame() {
  enemyGameboardDiv.classList.remove("before-start");
  startButton.classList.add("hide");

  renderAiBoard();
  randomBoardBtn.classList.add("hide");
}

aiGameboardDivs.forEach((div) => {
  div.addEventListener("click", handleAiGameboardClick);
});
closeBtn.addEventListener("click", reset);
randomBoardBtn.addEventListener("click", renderRandomBoard);
resetBoardBtn.addEventListener("click", resetBoard);
