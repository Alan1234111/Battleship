import Gameboard from "../Gameboard";
import {expect, describe, test, beforeEach} from "@jest/globals";
import {JSDOM} from "jsdom";

const dom = new JSDOM();
global.document = dom.window.document;

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="player-board">
        <div data-x="1" data-y="4"></div>
        <div data-x="2" data-y="4"></div>
        <div data-x="3" data-y="4"></div>
        <div data-x="4" data-y="4"></div>
      </div>
    `;

    gameboard = Gameboard();
    gameboard.createShip(3, [1, 2, 3], [4, 4, 4]);
  });

  describe("createShip", () => {
    test("adds a new ship to the gameboard", () => {
      expect(gameboard.ships.length).toBe(1);
    });

    test("adds impossible moves for the ship", () => {
      expect(gameboard.impossibleMoves.length).toBeGreaterThan(0);
    });
  });

  describe("placePlayerShips", () => {
    test("places the player's ships on the gameboard", () => {
      gameboard.placePlayerShips();
      const divs = document.querySelectorAll("#player-board div");
      expect(divs[0].classList.contains("ship")).toBe(true);
      expect(divs[1].classList.contains("ship")).toBe(true);
      expect(divs[2].classList.contains("ship")).toBe(true);
    });
  });

  describe("receiveAttack", () => {
    test("handles a hit on a ship", () => {
      gameboard.receiveAttack("player-board", 1, 4);
      const divs = document.querySelectorAll("#player-board div");
      expect(divs[0].classList.contains("hit")).toBe(true);
    });

    test("handles a miss on a ship", () => {
      gameboard.receiveAttack("player-board", 4, 4);
      const divs = document.querySelectorAll("#player-board div");
      expect(divs[3].classList.contains("miss-hit")).toBe(true);
    });
  });

  describe("isAllShipSunk", () => {
    test("returns false if not all ships are sunk", () => {
      expect(gameboard.isAllShipSunk()).toBe(false);
    });

    test("returns true if all ships are sunk", () => {
      gameboard.receiveAttack("player-board", 1, 4);
      gameboard.receiveAttack("player-board", 2, 4);
      gameboard.receiveAttack("player-board", 3, 4);
      expect(gameboard.isAllShipSunk()).toBe(true);
    });
  });
});
