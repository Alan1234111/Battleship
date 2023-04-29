const Ship = (length, xCords, yCords) => {
  const ship = {};

  ship.lengthToSunk = length;
  ship.numOfHit = 0;
  ship.Sunk = false;
  ship.xCords = xCords;
  ship.yCords = yCords;

  ship.hit = () => {
    ship.numOfHit++;
  };

  ship.isSunk = () => {
    if (ship.lengthToSunk === ship.numOfHit) {
      ship.Sunk = true;
    }
  };

  return ship;
};

export default Ship;
