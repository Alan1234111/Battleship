const ship = require("../factories/Ship");

describe("Ship functions", () => {
  it("Check hit function", () => {
    const destroyer = ship(2);
    destroyer.hit();

    expect(destroyer.getObject().numOfHit).toBe(1);
  });

  //   it("Is hit function add numOfHit to a ship", () => {});
});
