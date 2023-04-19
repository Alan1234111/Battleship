const ship = require("../factories/Ship");

describe("Ship functions", () => {
  it("Check hit function", () => {
    const destroyer = ship(2);
    destroyer.hit();

    expect(destroyer.getObject().numOfHit).toBe(1);
  });

  it("Check if the ship is alerady Sunk", () => {
    const destroyer = ship(2);
    destroyer.hit();
    destroyer.isSunk();
    expect(destroyer.getObject().isSunk).toBe(false);
    destroyer.hit();
    destroyer.isSunk();
    expect(destroyer.getObject().isSunk).toBe(true);
  });
});
