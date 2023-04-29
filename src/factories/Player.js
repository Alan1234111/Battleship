const Player = () => {
  const player = {};
  player.turn = "player";
  player.playerTurn = (gameboard, tile, xCord, yCord) => {
    if (gameboard.isAlreadyHit(xCord, yCord) || player.turn === "Ai") return;

    player.turn = "Ai";
    gameboard.receiveAttack(tile, xCord, yCord);
  };

  player.AiTurn = (gameboard) => {
    let xCord, yCord;
    do {
      xCord = Math.floor(Math.random() * 10);
      yCord = Math.floor(Math.random() * 10);
    } while (gameboard.recordedShots.some((coord) => coord[0] === xCord && coord[1] === yCord));

    const tile = gameboard.getTile(xCord, yCord);
    gameboard.receiveAttack(tile, xCord, yCord);
  };

  return player;
};

export default Player;
