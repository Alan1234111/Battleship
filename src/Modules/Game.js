// game.js
import Player from "../factories/Player";
import Gameboard from "../factories/Gameboard";

export default class Game {
  constructor() {
    this.player = Player();
    this.playerGameboard = Gameboard();
    this.aiGameboard = Gameboard();
    this.wall = document.querySelector(".wall");
    this.modal = document.querySelector(".modal");
    this.modalText = document.querySelector(".win-info");
    this.closeBtn = document.querySelector(".close-button");
    this.randomBoardBtn = document.getElementById("random");
    this.resetBoardBtn = document.getElementById("reset");
    this.aiGameboardDivs = document.querySelectorAll("#enemy-board div");
    this.playerGameboardDivs = document.querySelectorAll("#player-board div");
    this.startButton = document.getElementById("start");
    this.enemyGameboardDiv = document.getElementById("enemy-board");
    this.playerBoard = document.getElementById("player-board");
    this.shipsPlaceholder = document.querySelectorAll(".ships-container .ship-draggable");

    this.closeBtn.addEventListener("click", this.hideModal);
    this.randomBoardBtn.addEventListener("click", this.renderRandomBoard);
    this.resetBoardBtn.addEventListener("click", this.resetBoard);

    this.aiGameboardDivs.forEach((div) => {
      div.addEventListener("click", this.handleAiGameboardClick);
    });

    this.shipsPlaceholder.forEach((ship) => {
      const divs = ship.querySelectorAll("div");
      ship.addEventListener("dragstart", () => {
        this.dragStart(ship);
      });

      ship.addEventListener("dragend", () => {
        this.dragEnd(ship, divs);
      });

      ship.addEventListener("click", () => {
        ship.classList.toggle("vertical");
      });

      divs.forEach((div) => {
        div.addEventListener("mousedown", (e) => {
          e.target.classList.add("holding-div");
        });
      });

      //for mobile
      ship.addEventListener("touchstart", () => {
        this.dragStart(ship);
      });
    });

    this.playerBoard.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    this.playerBoard.addEventListener("touchmove", (event) => {
      event.preventDefault();
    });

    this.playerBoard.addEventListener("drop", this.drop);
    //for mobile drag and drop
    this.playerBoard.addEventListener("touchend", this.drop, false);
  }

  startTheGame = () => {
    this.enemyGameboardDiv.classList.remove("before-start");
    this.startButton.classList.add("hide");
    this.renderAiBoard();
    this.randomBoardBtn.classList.add("hide");
  };

  verticallyOrHorizontally() {
    const postion = Math.floor(Math.random() * 2);

    if (postion) {
      return "vertically";
    } else {
      return "horizontaly";
    }
  }

  randomShipCoords(length, gameboard) {
    const xCoords = [];
    const yCoords = [];
    let position = this.verticallyOrHorizontally();
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

  renderRandomBoard = () => {
    this.resetBoard();
    this.shipsPlaceholder.forEach((ship) => ship.classList.add("hide"));
    this.randomShipCoords(5, this.playerGameboard);
    this.randomShipCoords(4, this.playerGameboard);
    this.randomShipCoords(3, this.playerGameboard);
    this.randomShipCoords(3, this.playerGameboard);
    this.randomShipCoords(2, this.playerGameboard);
    this.playerGameboard.placePlayerShips();
    this.startButton.addEventListener("click", this.startTheGame, {once: true});
  };

  renderAiBoard() {
    this.randomShipCoords(5, this.aiGameboard);
    this.randomShipCoords(4, this.aiGameboard);
    this.randomShipCoords(3, this.aiGameboard);
    this.randomShipCoords(3, this.aiGameboard);
    this.randomShipCoords(2, this.aiGameboard);
  }

  handleAiGameboardClick = (e) => {
    this.player.playerTurn(this.aiGameboard, this.playerGameboard, e.target.dataset.x, e.target.dataset.y);
    // this.player.isTurnOver = false;

    if (this.playerGameboard.isAllShipSunk()) {
      this.showWinner("You Lost! Maybe the next time");
    }

    if (this.aiGameboard.isAllShipSunk()) {
      this.showWinner("Congratulations! You Win!");
    }
  };

  handleImpossibleMove(move) {
    if (move.x < 0 || move.y < 0 || move.x > 9 || move.y > 9) return;
    const div = document.querySelector(`#player-board [data-x="${move.x}"][data-y="${move.y}"]`);
    if (div.classList.contains("ship")) return;
    return div;
  }

  placeShip(placeToPut, ship, holdingDiv) {
    const xCord = parseInt(placeToPut.dataset.x, 10);
    const yCord = parseInt(placeToPut.dataset.y, 10);
    const shipsPlaces = [...ship.querySelectorAll("div")];
    const lengthOfShip = shipsPlaces.length;
    const offset = shipsPlaces.findIndex((shipPlace) => shipPlace === holdingDiv);

    if (this.#isOffTheBoard(ship, offset, lengthOfShip, xCord, yCord) || this.#isPossibleMove(ship, offset, lengthOfShip, xCord, yCord)) return;
    this.#showNextShip(ship);

    const xCoords = [];
    const yCoords = [];

    // Add xCoords and yCoords
    for (let i = 0; i < lengthOfShip; i++) {
      xCoords.push(ship.classList.contains("vertical") ? xCord : xCord + i - offset);
      yCoords.push(ship.classList.contains("vertical") ? yCord + i - offset : yCord);
    }

    // Create the ship and place it on the game board
    this.playerGameboard.createShip(lengthOfShip, xCoords, yCoords);
    this.playerGameboard.placePlayerShips();
  }

  #isOffTheBoard(ship, offset, lengthOfShip, xCord, yCord) {
    let xGoesOutRight, xGoesOutLeft, yGoesOutTop, yGoesOutBottom;
    if (ship.classList.contains("vertical")) {
      yGoesOutTop = yCord - offset;
      yGoesOutBottom = yCord + lengthOfShip - offset - 1;
      return yGoesOutTop < 0 || yGoesOutBottom > 9;
    } else {
      xGoesOutRight = xCord + lengthOfShip - offset - 1;
      xGoesOutLeft = xCord - offset;
      return xGoesOutRight > 9 || xGoesOutLeft < 0;
    }
  }

  #isPossibleMove = (ship, offset, lengthOfShip, xCord, yCord) => {
    let isImpossible = false;
    this.playerGameboard.impossibleMoves.some((move) => {
      if (ship.classList.contains("vertical")) {
        if (move.x === xCord && move.y >= yCord - offset && move.y < yCord + lengthOfShip - offset) {
          isImpossible = true;
        }
      } else {
        if (move.y === yCord && move.x >= xCord - offset && move.x < xCord + lengthOfShip - offset) {
          isImpossible = true;
        }
      }
    });

    return isImpossible;
  };

  #showNextShip(ship) {
    ship.classList.add("hide");
    ship.nextElementSibling ? ship.nextElementSibling.classList.remove("hide") : this.startButton.addEventListener("click", this.startTheGame, {once: true});
  }

  dragStart(ship) {
    ship.classList.add("dragging");

    const impossibleDivs = this.playerGameboard.impossibleMoves.map(this.handleImpossibleMove).filter(Boolean);
    impossibleDivs.forEach((div) => div.classList.add("impossible-move"));
  }

  dragEnd(ship, divs) {
    ship.classList.remove("dragging");

    this.playerGameboard.impossibleMoves
      .map(this.handleImpossibleMove)
      .filter(Boolean)
      .forEach((div) => div.classList.remove("impossible-move"));

    divs.forEach((div) => {
      div.classList.remove("holding-div");
    });
  }

  drop = (e) => {
    e.preventDefault();
    const placeToPut = e.target;
    const draggable = document.querySelector(".dragging");
    const holdingDiv = document.querySelector(".holding-div");
    holdingDiv.classList.remove("holding-div");

    this.placeShip(placeToPut, draggable, holdingDiv);
  };

  showWinner = (text) => {
    this.wall.classList.remove("hide");
    this.modal.classList.remove("hide");
    this.modalText.textContent = text;
  };

  resetBoard = () => {
    this.playerGameboardDivs.forEach((div) => {
      div.classList = "";
    });
    this.aiGameboardDivs.forEach((div) => {
      div.classList = "";
    });

    this.aiGameboard.ships.length = 0;
    this.aiGameboard.recordedShots.length = 0;
    this.aiGameboard.impossibleMoves.length = 0;
    this.playerGameboard.ships.length = 0;
    this.playerGameboard.recordedShots.length = 0;
    this.playerGameboard.impossibleMoves.length = 0;

    this.shipsPlaceholder.forEach((ship) => ship.classList.add("hide"));
    this.shipsPlaceholder[0].classList.remove("hide");

    this.enemyGameboardDiv.classList.add("before-start");
    this.startButton.classList.remove("hide");
    this.randomBoardBtn.classList.remove("hide");
    this.startButton.removeEventListener("click", this.startTheGame);
  };

  hideModal = () => {
    this.wall.classList.add("hide");
    this.modal.classList.add("hide");
    this.resetBoard();
  };
}
