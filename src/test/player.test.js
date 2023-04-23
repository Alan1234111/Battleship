const Player = require("../factories/Player");
const Ship = require("../factories/Ship");
const Gameboard = require("../factories/Gameboard");

it.skip("Check if player turn works", () => {
  const player = Player();
  const ships = [Ship(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]), Ship(4, [2, 2, 2, 2], [1, 2, 3, 4]), Ship(3, [4, 5, 6], [4, 4, 4])];

  expect(player.playerTurn(ships, 3, 6)).toBe(true);
});

it("Check if AiTurn function invoke again if the recorded shots and shots will be the same", () => {
  const player = Player();
  const gameboard = Gameboard();
  const ships = [Ship(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]), Ship(4, [2, 2, 2, 2], [1, 2, 3, 4]), Ship(3, [4, 5, 6], [4, 4, 4])];

  for (let i = 0; i < 7; i++) {
    gameboard.receiveAttack(ships, i, i);
  }

  expect(player.AiTurn(gameboard, ships)).toBe("s");
});
