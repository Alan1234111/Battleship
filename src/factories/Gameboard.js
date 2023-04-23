const Gameboard = () => {
  const gameboard = {
    recordedShots: [],

    receiveAttack: function (ships, xHitCord, yHitCord) {
      let hit = false;
      ships.forEach((ship) => {
        for (let i = 0; i < ship.xCords.length; i++) {
          if (ship.xCords[i] == xHitCord && ship.yCords[i] == yHitCord) {
            ship.hit();
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

    isAllShipSunk: (ships) => {
      return ships.every((ship) => {
        return ship.Sunk;
      });
    },
  };

  return gameboard;
};

module.exports = Gameboard;
