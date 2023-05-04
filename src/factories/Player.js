const Player = () => {
  const player = {};
  player.turn = "player";
  player.playerTurn = (gameboard, tile, xCord, yCord) => {
    if (gameboard.isAlreadyHit(xCord, yCord) || player.turn === "Ai") return;

    player.turn = "Ai";
    gameboard.receiveAttack("enemy-board", tile, xCord, yCord);
  };

  player.AiTurn = (gameboard) => {
    let xCord, yCord;
    do {
      xCord = Math.floor(Math.random() * 10);
      yCord = Math.floor(Math.random() * 10);
    } while (gameboard.recordedShots.some((coord) => coord.x === xCord && coord.y === yCord));

    const tile = gameboard.getTile(xCord, yCord);
    gameboard.receiveAttack("player-board", tile, xCord, yCord);
  };

  return player;
};

export default Player;
