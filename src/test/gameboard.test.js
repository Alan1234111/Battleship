const ship = require("../factories/Ship");
const Gameboard = require("../factories/Gameboard");
const {EntryPlugin} = require("webpack");

// const gameboard = GameboardFactory.gameboard;
// const recordedShots = GameboardFactory.recordedShots;

it("Check that hit area hit ship", () => {
  const gameboard = Gameboard();
  const ships = [ship(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]), ship(4, [2, 2, 2, 2], [1, 2, 3, 4]), ship(3, [4, 5, 6], [4, 4, 4])];
  const hittenShip = ships[1];
  gameboard.receiveAttack(ships, 2, 3);

  expect(hittenShip.numOfHit).toBe(1);
});

it("Check that missed shot is recorder", () => {
  const gameboard = Gameboard();
  const ships = [ship(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]), ship(4, [2, 2, 2, 2], [1, 2, 3, 4]), ship(3, [4, 5, 6], [4, 4, 4])];

  gameboard.receiveAttack(ships, 7, 7);
  gameboard.receiveAttack(ships, 7, 6);
  gameboard.receiveAttack(ships, 2, 3);

  expect(gameboard.recordedShots).toEqual([
    [7, 7],
    [7, 6],
  ]);
});

it("Check is all ships sunk", () => {
  const ships = [ship(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]), ship(4, [2, 2, 2, 2], [1, 2, 3, 4]), ship(3, [4, 5, 6], [4, 4, 4])];
  const gameboard = Gameboard;

  ships.forEach((ship) => {
    for (let i = 0; i < ship.lengthToSunk; i++) {
      ship.hit();
      ship.isSunk();
    }
  });

  expect(gameboard().isAllShipSunk(ships)).toBe(true);
});
