import Ship from "./Ship";

const Gameboard = () => {
  const gameboard = {
    recordedShots: [],
    ships: [],

    createShip: function (lengthToSunk, xCords, yCords) {
      return this.ships.push(Ship(lengthToSunk, xCords, yCords));
    },

    placeShips: function () {
      this.ships.forEach((ship) => {
        for (let i = 0; i < ship.xCords.length; i++) {
          const div = document.querySelector(`#player-board [data-x="${ship.xCords[i]}"][data-y="${ship.yCords[i]}"]`);
          div.classList.add("ship");
        }
      });
    },

    receiveAttack: function (xHitCord, yHitCord) {
      let hit = false;
      this.ships.forEach((ship) => {
        for (let i = 0; i < ship.xCords.length; i++) {
          if (ship.xCords[i] === parseInt(xHitCord) && ship.yCords[i] === parseInt(yHitCord)) {
            ship.hit();
            ship.isSunk();
            hit = true;
            break;
          }
        }
      });
      if (!hit) {
        this.recordShot([xHitCord, yHitCord]);
      }
    },

    recordShot: function (recordShot) {
      this.recordedShots.push(recordShot);
    },

    isAllShipSunk: function () {
      return this.ships.every((ship) => {
        return ship.Sunk;
      });
    },
  };

  return gameboard;
};

export default Gameboard;
