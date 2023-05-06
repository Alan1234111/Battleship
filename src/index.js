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
const playerBoard = document.getElementById("player-board");
const shipsPlaceholder = document.querySelectorAll(".ships-container .ship-draggable");

function verticallyOrHorizontally() {
  const postion = Math.floor(Math.random() * 2);

  if (postion) {
    return "vertically";
  } else {
    return "horizontaly";
  }
}

function randomShipCoords(length, gameboard) {
  const xCoords = [];
  const yCoords = [];
  let position = verticallyOrHorizontally();
  let turn = 0;

  while (turn < 100) {
    const xCordFirst = Math.floor(Math.random() * (10 - length + 1));
    const yCordFirst = Math.floor(Math.random() * (10 - length + 1));

    if (
      !gameboard.impossibleMoves.some((move) => {
        if (position === "vertically") {
          return move.x === xCordFirst && move.y >= yCordFirst && move.y < yCordFirst + length;
        } else {
          return move.y === yCordFirst && move.x >= xCordFirst && move.x < xCordFirst + length;
        }
      })
    ) {
      for (let i = 0; i < length; i++) {
        xCoords.push(position === "vertically" ? xCordFirst : xCordFirst + i);
        yCoords.push(position === "vertically" ? yCordFirst + i : yCordFirst);
      }
      gameboard.createShip(length, xCoords, yCoords);
      return;
    }
    turn++;
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
  aiGameboard.impossibleMoves.length = 0;
  playerGameboard.ships.length = 0;
  playerGameboard.recordedShots.length = 0;
  playerGameboard.impossibleMoves.length = 0;

  shipsPlaceholder.forEach((ship) => ship.classList.add("hide"));
  shipsPlaceholder[0].classList.remove("hide");

  enemyGameboardDiv.classList.add("before-start");
  startButton.classList.remove("hide");
  randomBoardBtn.classList.remove("hide");
  startButton.removeEventListener("click", startTheGame);
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
  shipsPlaceholder.forEach((ship) => ship.classList.add("hide"));
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

function placeShip(placeToPut, ship, holdingDiv) {
  const xCord = parseInt(placeToPut.dataset.x, 10);
  const yCord = parseInt(placeToPut.dataset.y, 10);
  const shipsPlaces = [...ship.querySelectorAll("div")];
  const lengthOfShip = shipsPlaces.length;
  const offset = shipsPlaces.findIndex((shipPlace) => shipPlace === holdingDiv);
  let xGoesOutRight, xGoesOutLeft, yGoesOutTop, yGoesOutBottom, condition;

  if (ship.classList.contains("vertical")) {
    yGoesOutTop = yCord - offset;
    yGoesOutBottom = yCord + lengthOfShip - offset - 1;
    condition = yGoesOutTop < 0 || yGoesOutBottom > 9;
  } else {
    xGoesOutRight = xCord + lengthOfShip - offset - 1;
    xGoesOutLeft = xCord - offset;
    condition = xGoesOutRight > 9 || xGoesOutLeft < 0;
  }
  playerGameboard.impossibleMoves.some((move) => {
    if (ship.classList.contains("vertical")) {
      if (move.x === xCord && move.y >= yCord - offset && move.y < yCord + lengthOfShip - offset) {
        condition = true;
      }
    } else {
      if (move.y === yCord && move.x >= xCord - offset && move.x < xCord + lengthOfShip - offset) {
        condition = true;
      }
    }
  });

  if (condition) return;

  // Hide ship and show next placeholder or start button
  ship.classList.add("hide");
  ship.nextElementSibling ? ship.nextElementSibling.classList.remove("hide") : startButton.addEventListener("click", startTheGame, {once: true});

  // Create arrays of x and y coordinates for ship placement
  const xCoords = [];
  const yCoords = [];

  for (let i = 0; i < lengthOfShip; i++) {
    if (ship.classList.contains("vertical")) {
      xCoords.push(xCord);
      yCoords.push(yCord + i - offset);
    } else {
      xCoords.push(xCord + i - offset);
      yCoords.push(yCord);
    }
  }

  // Create the ship and place it on the game board
  playerGameboard.createShip(lengthOfShip, xCoords, yCoords);
  playerGameboard.placeShips();
}

aiGameboardDivs.forEach((div) => {
  div.addEventListener("click", handleAiGameboardClick);
});

shipsPlaceholder.forEach((ship) => {
  const divs = ship.querySelectorAll("div");

  ship.addEventListener("dragstart", () => {
    ship.classList.add("dragging");

    const impossibleDivs = playerGameboard.impossibleMoves.map(handleImpossibleMove).filter(Boolean);
    impossibleDivs.forEach((div) => div.classList.add("impossible-move"));
  });

  ship.addEventListener("dragend", () => {
    ship.classList.remove("dragging");

    playerGameboard.impossibleMoves
      .map(handleImpossibleMove)
      .filter(Boolean)
      .forEach((div) => div.classList.remove("impossible-move"));

    divs.forEach((div) => {
      div.classList.remove("holding-div");
    });
  });

  ship.addEventListener("click", () => {
    ship.classList.toggle("vertical");
  });

  divs.forEach((div) => {
    div.addEventListener("mousedown", (e) => {
      e.target.classList.add("holding-div");
    });
  });
});

function handleImpossibleMove(move) {
  if (move.x < 0 || move.y < 0 || move.x > 9 || move.y > 9) return;
  const div = document.querySelector(`#player-board [data-x="${move.x}"][data-y="${move.y}"]`);
  if (div.classList.contains("ship")) return;
  return div;
}

playerBoard.addEventListener("dragover", (event) => {
  event.preventDefault();
});

playerBoard.addEventListener("drop", (event) => {
  event.preventDefault();
  const draggable = document.querySelector(".dragging");
  const holdingDiv = document.querySelector(".holding-div");
  holdingDiv.classList.remove("holding-div");

  placeShip(event.target, draggable, holdingDiv);
});

closeBtn.addEventListener("click", reset);
randomBoardBtn.addEventListener("click", renderRandomBoard);
resetBoardBtn.addEventListener("click", resetBoard);
