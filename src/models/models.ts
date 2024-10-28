import { generateNewDeck } from './utils.ts'

export class Card {
  public id: string
  public value: number
  public isOpen: boolean

  constructor (value: number) {
    this.id = crypto.randomUUID()
    this.value = value
    this.isOpen = false
  }

  flip (): boolean {
    return this.isOpen = !this.isOpen
  }
}

export class Deck {
  public deckState: Card[]

  constructor () {
    this.deckState = generateNewDeck()
    // this.showCards()
  }

  // showCards () {
  //   this.deckState.forEach((card: Card) => card.isOpen = true)
  //
  //   setTimeout(() => {
  //     this.deckState.forEach((card: Card) => card.isOpen = false)
  //   }, 3000)
  // }
}

export class Game {
  public deck: Deck
  public firstCard: Card | null
  public secondCard: Card | null
  public isComplete: boolean

  constructor (deck: Deck) {
    this.firstCard = null
    this.secondCard = null
    this.isComplete = false
    this.deck = deck
  }

  private checkDeck (): void {
    this.isComplete = this.deck.deckState.every((card) => card.isOpen)
  }

  // choseCard (cardIndex: number): void {
  //   this.deck.deckState[cardIndex].flip()
  //   this.checkDeck()
  // }

  openCard (card: Card): void {
    card.flip()
    this.checkDeck()
  }

  resetPair (): void {
    if (this.firstCard && this.secondCard) {
      this.firstCard.isOpen = false
      this.secondCard.isOpen = false
    }
  }

  checkPair (): void {
    if (this.firstCard && this.secondCard && this.firstCard.value === this.secondCard.value) {
      this.firstCard.isOpen = true
      this.secondCard.isOpen = true
    } else {
      this.resetPair()
    }
  }
}

const deck = new Deck()

console.log(deck)
