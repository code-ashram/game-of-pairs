import {Card} from "./models.ts";

const generateRandomValues  = (): Card[] => {
  const board: Card[] = []

  while (board.length < 8) {
    const value = Math.floor(Math.random() * 8) + 1

    if (board.some((tile) => tile.value === value)) continue

    board.push(new Card(value))
  }

  return board
}

export const generateNewBoard = () => {
  return [...generateRandomValues(), ...generateRandomValues()]
}
