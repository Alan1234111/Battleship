const Player = () => {
  const player = {
    makeRandomMoves: () => {
      return Math.floor(Math.random() * 7);
    },

    playerTurn: (gameboard, ships, xCord, yCord) => {
      gameboard.receiveAttack(ships, xCord, yCord);
    },

    AiTurn: (gameboard, ships) => {
      let xCord = player.makeRandomMoves();
      let yCord = player.makeRandomMoves();
      let isTheSame = gameboard.recordedShots.some((shot) => {
        if (xCord === shot[0] && yCord === shot[1]) {
          return true;
        }
      });

      if (!isTheSame) {
        return gameboard.receiveAttack(ships, xCord, yCord);
      } else {
        return player.AiTurn(gameboard, ships);
      }
    },
  };
  return player;
};

export default Player;
