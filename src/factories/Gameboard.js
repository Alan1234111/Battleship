import Ship from "./Ship";

const Gameboard = () => {
  const recordedShots = [];
  const ships = [];

  const createShip = (lengthToSunk, xCords, yCords) => {
    ships.push(Ship(lengthToSunk, xCords, yCords));
  };

  const placeShips = () => {
    ships.forEach((ship) => {
      for (let i = 0; i < ship.xCords.length; i++) {
        const div = document.querySelector(`#player-board [data-x="${ship.xCords[i]}"][data-y="${ship.yCords[i]}"]`);
        div.classList.add("ship");
      }
    });
  };

  const receiveAttack = (tile, xHitCord, yHitCord) => {
    let hit = false;

    ships.forEach((ship) => {
      for (let i = 0; i < ship.xCords.length; i++) {
        if (ship.xCords[i] === parseInt(xHitCord) && ship.yCords[i] === parseInt(yHitCord)) {
          ship.hit();
          ship.isSunk();
          tile.classList.add("hit");
          hit = true;
          break;
        }
      }
    });

    if (!hit) {
      tile.classList.add("miss-hit");
    }
    recordShot([xHitCord, yHitCord]);
  };

  const recordShot = (recordShot) => {
    recordedShots.push(recordShot);
  };

  const isAllShipSunk = () => {
    return ships.every((ship) => ship.Sunk);
  };

  const isAlreadyHit = (xCord, yCord) => {
    let hit = false;
    recordedShots.forEach((shot) => {
      if (shot[0] === xCord && shot[1] === yCord) {
        hit = true;
      }
    });

    return hit;
  };

  const getTile = (xCord, yCord) => {
    return document.querySelector(`#player-board [data-x="${xCord}"][data-y="${yCord}"]`);
  };

  return {
    ships,
    recordedShots,
    createShip,
    placeShips,
    receiveAttack,
    isAllShipSunk,
    isAlreadyHit,
    getTile,
  };
};

export default Gameboard;
