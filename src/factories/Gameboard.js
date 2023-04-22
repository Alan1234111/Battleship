let recordedShots = [];

const Gameboard = () => {
  return {
    receiveAttack: (ship, xHitCord, yHitCord) => {
      for (let i = 0; i < ship.getObject().xCords.length; i++) {
        if (ship.getObject().xCords[i] == xHitCord && ship.getObject().yCords[i] == yHitCord) {
          return ship.hit();
        }
      }
      recordedShots.push([xHitCord, yHitCord]);
    },

    isAllShipSunk: (ships) => {
      return ships.every((ship) => {
        return ship.getObject().isSunk;
      });
    },
  };
};

module.exports = {gameboard: Gameboard, recordedShots: recordedShots};
