const ship = require("../factories/Ship");
const GameboardFactory = require("../factories/Gameboard");

const gameboard = GameboardFactory.gameboard;
const recordedShots = GameboardFactory.recordedShots;

it("Check that hit area hit ship", () => {
  const destroyer = ship(2, [2, 3], [3, 3]);

  gameboard(destroyer).receiveAttack(2, 3);
  expect(destroyer.getObject().numOfHit).toBe(1);
});

it("Check that missed shot is recorder", () => {
  const destroyer = ship(2, [2, 3], [3, 3]);

  gameboard(destroyer).receiveAttack(5, 4);
  expect(recordedShots).toEqual([[5, 4]]);
});

it("Check is all ships sunk", () => {
  const ships = {
    carrier: ship(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]),
    battleship: ship(4, [2, 2, 2, 2], [1, 2, 3, 4]),
    cruiser: ship(3, [4, 5, 6], [4, 4, 4]),
  };

  ships.forEach((ship) => {
    for (let i = 0; i < ship.length; i++) {
      ship.hit();
    }
  });

  ships.forEach((ship) => {});
});
