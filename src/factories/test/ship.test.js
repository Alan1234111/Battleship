import Ship from "../Ship";
import { it, expect, describe } from "@jest/globals";

describe("Ship functions", () => {
  it("Check hit function", () => {
    const destroyer = Ship(2);
    destroyer.hit();

    expect(destroyer.numOfHit).toBe(1);
  });

  it("Check it the ship is alerady Sunk", () => {
    const destroyer = Ship(2);
    destroyer.hit();
    destroyer.hit();
    destroyer.isSunk();
    expect(destroyer.Sunk).toBe(true);
  });

  it("Check it the ship have right x cords", () => {
    const destroyer = Ship(2, [2, 3], [3, 3]);

    expect(destroyer.xCords).toEqual([2, 3]);
  });

  it("Check it the ship have right y cords", () => {
    const destroyer = Ship(2, [2, 3], [3, 3]);

    expect(destroyer.yCords).toEqual([3, 3]);
  });
});