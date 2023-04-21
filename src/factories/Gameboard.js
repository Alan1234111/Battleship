let recordedShots = [];

const Gameboard = (ship) => {
  return {
    receiveAttack: (xHitCord, yHitCord) => {
      for (let i = 0; i < ship.getObject().xCords.length; i++) {
        if (
          ship.getObject().xCords[i] == xHitCord &&
          ship.getObject().yCords[i] == yHitCord
        ) {
          return ship.hit();
        }
      }
      recordedShots.push([xHitCord, yHitCord]);
    },

    isAllShipSunk: () => {},
  };
};

module.exports = { gameboard: Gameboard, recordedShots: recordedShots };
