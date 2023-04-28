const Player = () => {
  const player = {
    makeRandomMoves: () => {
      return Math.floor(Math.random() * 7);
    },

    playerTurn: (gameboard, xCord, yCord) => {
      let isAlredyHit = false;
      gameboard.recordedShots.forEach((shot) => {
        if (shot[0] === xCord && shot[1] === yCord) {
          isAlredyHit = true;
        }
      });

      if (!isAlredyHit) {
        gameboard.receiveAttack(xCord, yCord);
      }
    },

    AiTurn: function (gameboard) {
      let xCord = this.makeRandomMoves();
      let yCord = this.makeRandomMoves();
      let isTheSame = gameboard.recordedShots.some((shot) => {
        if (xCord === shot[0] && yCord === shot[1]) {
          return true;
        }
      });

      if (!isTheSame) {
        return gameboard.receiveAttack(xCord, yCord);
      } else {
        return this.AiTurn(gameboard);
      }
    },
  };
  return player;
};

export default Player;
