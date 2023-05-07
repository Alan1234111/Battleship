import {test, expect, describe} from "@jest/globals";
import Ship from "../Ship";

describe("Ship", () => {
  test("returns an object with the correct properties", () => {
    const ship = Ship(3, [1, 2, 3], [4, 4, 4]);

    expect(ship.lengthToSunk).toBe(3);
    expect(ship.numOfHit).toBe(0);
    expect(ship.xCords).toEqual([1, 2, 3]);
    expect(ship.yCords).toEqual([4, 4, 4]);
    expect(ship.isSunk).toBe(false);
  });

  test("hit function updates the correct properties", () => {
    const ship = Ship(3, [1, 2, 3], [4, 4, 4]);

    ship.hit();
    expect(ship.numOfHit).toBe(1);
    expect(ship.isSunk).toBe(false);

    ship.hit();
    expect(ship.numOfHit).toBe(2);
    expect(ship.isSunk).toBe(false);

    ship.hit();
    expect(ship.numOfHit).toBe(3);
    expect(ship.isSunk).toBe(true);
  });
});
