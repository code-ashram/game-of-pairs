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
  public cards: Card[]

  constructor () {
    this.cards = generateNewDeck()
  }
}

export class Game {
  public deck: Deck
  public firstCard: Card | null
  public secondCard: Card | null
  public isComplete: boolean

  constructor () {
    this.firstCard = null
    this.secondCard = null
    this.isComplete = false
    this.deck = new Deck()
  }

  private checkDeck (): void {
    this.isComplete = this.deck.cards.every((card) => card.isOpen)
  }

  showCards () {
    this.deck.cards.forEach((card: Card) => card.isOpen = true)

    setTimeout(() => {
      this.deck.cards.forEach((card: Card) => card.isOpen = false)
    }, 3000)
  }

  openCard (card: Card): void {
    card.flip()
    this.deck = {...this.deck, cards: this.deck.cards.map((prevCard) => prevCard.id === card.id ? card : prevCard)}
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
