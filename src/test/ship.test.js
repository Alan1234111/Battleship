const ship = require("../factories/Ship");

describe("Ship functions", () => {
  it("Check hit function", () => {
    const destroyer = ship(2);
    destroyer.hit();

    expect(destroyer.getObject().numOfHit).toBe(1);
  });

  it("Check it the ship is alerady Sunk", () => {
    const destroyer = ship(2);
    destroyer.hit();
    destroyer.isSunk();
    expect(destroyer.getObject().isSunk).toBe(false);
    destroyer.hit();
    destroyer.isSunk();
    expect(destroyer.getObject().isSunk).toBe(true);
  });

  it("Check it the ship have right cords", () => {
    const destroyer = ship(2, [2, 3], [3, 3]);

    expect(destroyer.getObject().xCords).toEqual([2, 3]);
    expect(destroyer.getObject().yCords).toEqual([3, 3]);
  });
});
