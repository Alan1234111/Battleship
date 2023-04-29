import Ship from "../Ship";
import {it, expect, describe, beforeEach} from "@jest/globals";

describe("Ship functions", () => {
  let destroyer;

  beforeEach(() => {
    destroyer = Ship(2, [2, 3], [3, 3]);
  });

  it("should increase the number of hits by one when hit is called", () => {
    destroyer.hit();

    expect(destroyer.numOfHit).toBe(1);
  });

  it("should set the 'sunk' property to true when the ship is sunk", () => {
    destroyer.hit();
    destroyer.hit();
    destroyer.isSunk();
    expect(destroyer.Sunk).toBe(true);
  });

  it("should return the correct x coordinates of the ship", () => {
    expect(destroyer.xCords).toEqual([2, 3]);
  });

  it("should return the correct y coordinates of the ship", () => {
    expect(destroyer.yCords).toEqual([3, 3]);
  });
});
