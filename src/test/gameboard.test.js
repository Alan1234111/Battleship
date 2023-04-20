const ship = require("../factories/Ship");
const gameboard = require("../factories/Gameboard");

it("Check that hit area hit ship", () => {
  const destroyer = ship(2, [2, 3], [3, 3]);
  gameboard(destroyer);
  gameboard(destroyer).receiveAttack(2, 3);
  expect(destroyer.getObject().numOfHit).toBe(1);

  gameboard(destroyer).receiveAttack(5, 4);
  expect(destroyer.getObject().numOfHit).toBe(1);

  expect(gameboard(destroyer).getObject()).toBe("1");

  // expect().toEqual([5, 4]);
});
