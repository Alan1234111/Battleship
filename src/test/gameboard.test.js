const ship = require("../factories/Ship");
const GameboardFactory = require("../factories/Gameboard");

const gameboard = GameboardFactory.gameboard;
const recordedShots = GameboardFactory.recordedShots;

it("Check that hit area hit ship", () => {
  const destroyer = ship(2, [2, 3], [3, 3]);

  gameboard(destroyer).receiveAttack(2, 3);
  expect(destroyer.getObject().numOfHit).toBe(1);

  gameboard(destroyer).receiveAttack(5, 4);
  expect(recordedShots).toEqual([[5, 4]]);

  // expect(gameboard(destroyer).getObject()).toBe("1");

  // expect().toEqual([5, 4]);
});
