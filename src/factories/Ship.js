const Ship = (length) => {
  const ship = {
    lengthToSunk: length,
    numOfHit: 0,
    isSunk: false,
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
