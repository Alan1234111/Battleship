const Ship = (length, xCords, yCords) => {
  const ship = {};

  ship.lengthToSunk = length;
  ship.numOfHit = 0;
  ship.xCords = xCords;
  ship.yCords = yCords;
  ship.isSunk = false;

  ship.hit = () => {
    ship.numOfHit++;
    if (ship.lengthToSunk === ship.numOfHit) {
      ship.isSunk = true;
    }
  };

  return ship;
};

export default Ship;
