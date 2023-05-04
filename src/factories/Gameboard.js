import Ship from "./Ship";

const Gameboard = () => {
  const recordedShots = [];
  const ships = [];
  const impossibleMoves = [];

  const createShip = (lengthToSunk, xCords, yCords) => {
    const ship = Ship(lengthToSunk, xCords, yCords);
    ships.push(ship);
    addImposibleMoves(ship);
  };

  const placeShips = () => {
    ships.forEach((ship) => {
      for (let i = 0; i < ship.xCords.length; i++) {
        const div = document.querySelector(`#player-board [data-x="${ship.xCords[i]}"][data-y="${ship.yCords[i]}"]`);
        div.classList.add("ship");
      }
    });
  };

  const receiveAttack = (gameboard, tile, xHitCord, yHitCord) => {
    let hit = false;
    const ship = ships.find((ship) => {
      return ship.xCords.includes(parseInt(xHitCord)) && ship.yCords.includes(parseInt(yHitCord));
    });

    if (ship) {
      hit = true;
      ship.hit();
      tile.classList.add("hit");

      if (ship.isSunk) {
        ship.xCords.forEach((xCord, i) => {
          const div = document.querySelector(`#${gameboard} [data-x="${xCord}"][data-y="${ship.yCords[i]}"]`);
          div.classList.remove("ship");
          div.classList.add("sunk");
        });
      }
    }

    if (!hit) {
      tile.classList.add("miss-hit");
    }

    recordedShots.push({x: xHitCord, y: yHitCord});
  };

  const isAllShipSunk = () => {
    return ships.every((ship) => ship.isSunk);
  };

  const isAlreadyHit = (xCord, yCord) => {
    let hit = false;
    recordedShots.forEach((shot) => {
      if (shot.x === xCord && shot.y === yCord) {
        hit = true;
      }
    });

    return hit;
  };

  const getTile = (xCord, yCord) => {
    return document.querySelector(`#player-board [data-x="${xCord}"][data-y="${yCord}"]`);
  };

  function addImposibleMoves(ship) {
    const indexOfLastTile = ship.lengthToSunk - 1;
    const firstTile = [ship.xCords[0], ship.yCords[0]];
    const lastTile = [ship.xCords[indexOfLastTile], ship.yCords[indexOfLastTile]];

    // when is vertically |
    if (ship.xCords[0] === ship.xCords[1]) {
      ship.yCords.forEach((yCord, i) => {
        if (yCord === firstTile[1]) {
          // impossible moves for first tile
          impossibleMoves.push({x: firstTile[0], y: firstTile[1]});
          impossibleMoves.push({x: firstTile[0] - 1, y: firstTile[1]});
          impossibleMoves.push({x: firstTile[0] - 1, y: firstTile[1] - 1});
          impossibleMoves.push({x: firstTile[0], y: firstTile[1] - 1});
          impossibleMoves.push({x: firstTile[0] + 1, y: firstTile[1] - 1});
          impossibleMoves.push({x: firstTile[0] + 1, y: firstTile[1]});
        } else if (yCord === lastTile[1]) {
          // impossible moves for last tile
          impossibleMoves.push({x: lastTile[0], y: lastTile[1]});
          impossibleMoves.push({x: lastTile[0] - 1, y: lastTile[1]});
          impossibleMoves.push({x: lastTile[0] - 1, y: lastTile[1] + 1});
          impossibleMoves.push({x: lastTile[0], y: lastTile[1] + 1});
          impossibleMoves.push({x: lastTile[0] + 1, y: lastTile[1] + 1});
          impossibleMoves.push({x: lastTile[0] + 1, y: lastTile[1]});
        } else {
          // impossible moves for the rest of tile
          impossibleMoves.push({x: ship.xCords[i], y: yCord});
          impossibleMoves.push({x: ship.xCords[i] - 1, y: yCord});
          impossibleMoves.push({x: ship.xCords[i] + 1, y: yCord});
        }
      });
    }

    // when is horizontaly -
    if (ship.yCords[0] === ship.yCords[1]) {
      ship.xCords.forEach((xCord, i) => {
        if (xCord === firstTile[0]) {
          // impossible moves for first tile
          impossibleMoves.push({x: firstTile[0], y: firstTile[1]});
          impossibleMoves.push({x: firstTile[0], y: firstTile[1] - 1});
          impossibleMoves.push({x: firstTile[0] - 1, y: firstTile[1] - 1});
          impossibleMoves.push({x: firstTile[0] - 1, y: firstTile[1]});
          impossibleMoves.push({x: firstTile[0] - 1, y: firstTile[1] + 1});
          impossibleMoves.push({x: firstTile[0], y: firstTile[1] + 1});
        } else if (xCord === lastTile[0]) {
          // impossible moves for last tile
          impossibleMoves.push({x: lastTile[0], y: lastTile[1]});
          impossibleMoves.push({x: lastTile[0], y: lastTile[1] - 1});
          impossibleMoves.push({x: lastTile[0] + 1, y: lastTile[1] - 1});
          impossibleMoves.push({x: lastTile[0] + 1, y: lastTile[1]});
          impossibleMoves.push({x: lastTile[0] + 1, y: lastTile[1] + 1});
          impossibleMoves.push({x: lastTile[0], y: lastTile[1] + 1});
        } else {
          // impossible moves for the rest of tile
          impossibleMoves.push({x: xCord, y: ship.yCords[i]});
          impossibleMoves.push({x: xCord, y: ship.yCords[i] + 1});
          impossibleMoves.push({x: xCord, y: ship.yCords[i] - 1});
        }

        //2
        //
      });
    }
    console.log(impossibleMoves);
    // console.log(impossibleMoves);
  }

  return {
    ships,
    recordedShots,
    createShip,
    placeShips,
    receiveAttack,
    isAllShipSunk,
    isAlreadyHit,
    getTile,
    impossibleMoves,
  };
};

export default Gameboard;
