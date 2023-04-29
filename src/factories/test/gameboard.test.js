import Gameboard from "../Gameboard";
import {it, expect, describe, beforeEach} from "@jest/globals";
import {JSDOM} from "jsdom";

const dom = new JSDOM();
global.document = dom.window.document;

describe("Gameboard", () => {
  let gameboard;
  let firstTile;
  let secondTile;
  let thirdTile;
  let tile;

  beforeEach(() => {
    gameboard = Gameboard();
    firstTile = document.createElement("div");
    secondTile = document.createElement("div");
    thirdTile = document.createElement("div");
    tile = document.createElement("div");

    gameboard.createShip(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]);
    gameboard.createShip(4, [2, 2, 2, 2], [1, 2, 3, 4]);
    gameboard.createShip(3, [4, 5, 6], [4, 4, 4]);
  });

  it("should register hit on a ship when hit area hit the ship", () => {
    gameboard.receiveAttack(firstTile, 2, 3);
    expect(gameboard.ships[1].numOfHit).toBe(1);
  });

  it("should record missed shots", () => {
    gameboard.receiveAttack(firstTile, 7, 7);
    gameboard.receiveAttack(secondTile, 7, 6);
    gameboard.receiveAttack(thirdTile, 2, 3);
    expect(gameboard.recordedShots).toEqual([
      [7, 7],
      [7, 6],
      [2, 3],
    ]);
  });

  it("should detect if all ships have been sunk", () => {
    gameboard.ships.forEach((ship) => {
      for (let i = 0; i < ship.xCords.length; i++) {
        gameboard.receiveAttack(tile, ship.xCords[i], ship.yCords[i]);
      }
    });

    expect(gameboard.isAllShipSunk()).toBe(true);
  });
});
