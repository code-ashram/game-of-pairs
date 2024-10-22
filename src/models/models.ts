import {generateNewDeck} from "./utils.ts";

export class Card {
  public id: string;
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

class Deck {
  public deckState: Card[];

  constructor() {
    this.deckState = generateNewDeck();
  }
}

class Game {
  public deck: Deck
  public isCompleteOpen: boolean;

  constructor(deck: Deck) {
    this.isCompleteOpen = false;
    this.deck = deck;
  }

  checkDeck(): boolean {
    return this.deck.deckState.every((card) => card.isOpen)
      ? this.isCompleteOpen = true
      : this.isCompleteOpen = false;
  }

  choseCard(cardIndex: number): void {
    this.deck.deckState[cardIndex].turnOverCard();
    this.checkDeck();
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

const deck = new Deck();

console.log(deck)


//
// const board = new Board()
//
// console.log(board)

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
