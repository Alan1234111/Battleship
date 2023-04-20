const Ship = (length, xCords, yCords) => {
  const ship = {
    lengthToSunk: length,
    numOfHit: 0,
    isSunk: false,
    xCords: xCords,
    yCords: yCords,
  };

  return {
    hit: () => {
      ship.numOfHit++;
    },

    isSunk: () => {
      if (ship.lengthToSunk == ship.numOfHit) {
        ship.isSunk = true;
      }
    },

    getObject: () => ship,
  };
};

module.exports = Ship;
