const Ship = (length, xCords, yCords) => {
  const ship = {
    lengthToSunk: length,
    numOfHit: 0,
    Sunk: false,
    xCords: xCords,
    yCords: yCords,

    hit: () => {
      ship.numOfHit++;
    },

    isSunk: () => {
      if (ship.lengthToSunk === ship.numOfHit) {
        ship.Sunk = true;
      }
    },
  };
  return ship;
};

module.exports = Ship;
