const ship = require("../factories/Ship");
const GameboardFactory = require("../factories/Gameboard");
const {EntryPlugin} = require("webpack");

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
  const ships = [ship(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]), ship(4, [2, 2, 2, 2], [1, 2, 3, 4]), ship(3, [4, 5, 6], [4, 4, 4])];

  ships.forEach((ship) => {
    for (let i = 0; i < ship.getObject().lengthToSunk; i++) {
      ship.hit();
      ship.isSunk();
    }
  });

  const isAllShipSunk = ships.every((ship) => {
    return ship.getObject().isSunk;
  });

  expect(isAllShipSunk).toBe(true);
});
