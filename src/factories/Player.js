const Player = () => {
  const player = {};
  player.isTurnOver = true;
  player.delay = 400;

  player.playerTurn = (AiGameboard, playerGameboard, xCord, yCord) => {
    if (AiGameboard.isAlreadyHit(xCord, yCord) || !player.isTurnOver) return;
    const hit = AiGameboard.receiveAttack("enemy-board", xCord, yCord);

    if (!hit) {
      player.isTurnOver = false;
      setTimeout(() => {
        player.AiTurn(playerGameboard);
      }, player.delay);
    }
  };

  player.AiTurn = (gameboard) => {
    let xCord, yCord;
    do {
      xCord = Math.floor(Math.random() * 10);
      yCord = Math.floor(Math.random() * 10);
    } while (gameboard.recordedShots.some((coord) => coord.x === xCord && coord.y === yCord));

    const hit = gameboard.receiveAttack("player-board", xCord, yCord);

    if (hit) {
      return setTimeout(() => {
        player.AiTurn(gameboard);
      }, player.delay);
    }

    player.isTurnOver = true;
  };

  return player;
};

export default Player;
