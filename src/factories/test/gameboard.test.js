// import Ship from "../Ship";
import Gameboard from "../Gameboard";
import { it, expect } from "@jest/globals";

it("Check that hit area hit ship", () => {
  const gameboard = Gameboard();
  gameboard.createShip(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]);
  gameboard.createShip(4, [2, 2, 2, 2], [1, 2, 3, 4]);
  gameboard.createShip(3, [4, 5, 6], [4, 4, 4]);
  gameboard.receiveAttack(2, 3);

  expect(gameboard.ships[1].numOfHit).toBe(1);
});

it("Check that missed shot is recorder", () => {
  const gameboard = Gameboard();

  gameboard.createShip(5, [2, 3, 4, 5, 6], [1, 1, 1, 1, 1]);
  gameboard.createShip(4, [2, 2, 2, 2], [1, 2, 3, 4]);
  gameboard.createShip(3, [4, 5, 6], [4, 4, 4]);

  gameboard.receiveAttack(7, 7);
  gameboard.receiveAttack(7, 6);
  gameboard.receiveAttack(2, 3);

  expect(gameboard.recordedShots).toEqual([
    [7, 7],
    [7, 6],
  ]);
});

it("Check is all ships sunk", () => {
  const gameboard = Gameboard();
  gameboard.createShip(2, [2, 3], [1, 1]);
  gameboard.createShip(2, [2, 2], [3, 4]);

  gameboard.receiveAttack("2", "1");
  gameboard.receiveAttack("3", "1");
  gameboard.receiveAttack("2", "3");
  gameboard.receiveAttack("2", "4");

  expect(gameboard.isAllShipSunk()).toBe(true);
});
