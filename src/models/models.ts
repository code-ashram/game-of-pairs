import {generateNewBoard} from "./utils.ts";

export class Card {
  protected id: string;
  public value: number;
  public isOpen: boolean;

  constructor(value: number) {
    this.id = crypto.randomUUID();
    this.value = value;
    this.isOpen = false;
  }

  turnOverCard(): boolean {
    return this.isOpen = !this.isOpen;
  }
}

class Board {
  public boardState: Card[];
  public isCompleteOpen: boolean;

  constructor() {
    this.isCompleteOpen = false;
    this.boardState = generateNewBoard();
  }

  checkBoard(board: Card[]): boolean {
    return board.every((card) => card.isOpen)
      ? this.isCompleteOpen = true
      : this.isCompleteOpen = false;
  }

  choseCard(index: number): void {
    this.boardState[index].turnOverCard();
    this.checkBoard(this.boardState)
  }

  checkCurrentCards(firstCard: Card, secondCard: Card) {
    if (firstCard.value === secondCard.value) {
      firstCard.isOpen = true
      secondCard.isOpen = true
    } else {
      firstCard.isOpen = false
      secondCard.isOpen = false
    }
  }
}

const board = new Board()

console.log(board)

// board.choseCard(0)
// board.choseCard(1)
// board.choseCard(2)
// board.choseCard(3)
// board.choseCard(4)
// board.choseCard(5)
// board.choseCard(6)
// board.choseCard(7)
// board.choseCard(8)
// board.choseCard(9)
// board.choseCard(10)
// board.choseCard(11)
// board.choseCard(12)
// board.choseCard(13)
// board.choseCard(14)
// board.choseCard(15)
//
// console.log(board.isCompleteOpen)
