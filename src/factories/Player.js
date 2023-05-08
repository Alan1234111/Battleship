const Player = () => {
  const player = {};
  player.isTurnOver = true;
  player.delay = 400;
  player.nextHit = [];
  player.lastHitPos = [];
  player.firstHitPos = [];
  player.secondHitPos = [];
  player.surroundingPos = [];

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

    if (player.nextHit[0]) {
      xCord = player.nextHit[0].x;
      yCord = player.nextHit[0].y;
      player.nextHit.length = 0;
    } else {
      do {
        xCord = Math.floor(Math.random() * 10);
        yCord = Math.floor(Math.random() * 10);
      } while (gameboard.recordedShots.some((coord) => coord.x === xCord && coord.y === yCord));
    }

    const hit = gameboard.receiveAttack("player-board", xCord, yCord);

    if (hit) {
      // Save first and second hit position
      !player.firstHitPos[0] ? (player.firstHitPos = [{x: xCord, y: yCord}]) : (player.secondHitPos = [{x: xCord, y: yCord}]);
      // save last hit position
      player.lastHitPos = [{x: xCord, y: yCord}];

      const tile = gameboard.getTile("player-board", xCord, yCord);
      //check is ship already sunk
      if (tile.classList.contains("sunk")) {
        player.nextHit = [];
        player.firstHitPos = [];
        player.secondHitPos = [];
        player.surroundingPos.length = 0;
      } else {
        player.secondHitPos[0] ? player.addNextMoves(gameboard, player.secondHitPos[0].x, player.secondHitPos[0].y) : player.addNextMoves(gameboard, player.firstHitPos[0].x, player.firstHitPos[0].y);
      }
      // take another shot
      player.isTurnOver = false;
      return setTimeout(() => {
        player.AiTurn(gameboard);
      }, player.delay);
    } else {
      // if is missed shot give another possible moves if ship was not all sunk
      if (player.lastHitPos[0] && player.firstHitPos[0]) {
        player.addNextMoves(gameboard, player.lastHitPos[0].x, player.lastHitPos[0].y);
      }
    }

    player.isTurnOver = true;
  };

  player.addNextMoves = (gameboard, x, y) => {
    //All possibles next moves
    if (x >= 0 && y - 1 >= 0 && !gameboard.isAlreadyHit(x, y - 1)) player.surroundingPos.push({x: x, y: y - 1});
    if (x - 1 >= 0 && y >= 0 && !gameboard.isAlreadyHit(x - 1, y)) player.surroundingPos.push({x: x - 1, y: y});
    if (x + 1 <= 9 && y <= 9 && !gameboard.isAlreadyHit(x + 1, y)) player.surroundingPos.push({x: x + 1, y: y});
    if (x <= 9 && y + 1 <= 9 && !gameboard.isAlreadyHit(x, y + 1)) player.surroundingPos.push({x: x, y: y + 1});

    let randomPos;

    // when ship is hit at least 2 times
    if (player.secondHitPos[0]) {
      // Save vertically or horizontaly moves
      player.firstHitPos[0].y === player.secondHitPos[0].y ? (player.surroundingPos = player.surroundingPos.filter((pos) => pos.y === player.secondHitPos[0].y)) : (player.surroundingPos = player.surroundingPos.filter((pos) => pos.x === player.secondHitPos[0].x));
      // take random postion from avaliable
      randomPos = Math.floor(Math.random() * player.surroundingPos.length);
      player.nextHit = player.surroundingPos.splice(randomPos, 1);
      return;
    }
    //when this is first ship hit
    randomPos = Math.floor(Math.random() * player.surroundingPos.length);
    player.nextHit = player.surroundingPos.splice(randomPos, 1);
  };

  return player;
};

export default Player;
