import { Deck } from './Deck.ts'
import { Card } from './Card.ts'
import { DELAY_MS } from '../constants'
import { showCards } from '../utils'

export class Game {
  public deck: Deck
  private firstCard: Card | null
  private secondCard: Card | null
  public step: number
  public isComplete: boolean

  constructor () {
    this.firstCard = null
    this.secondCard = null
    this.isComplete = false
    this.step = 0
    this.deck = new Deck()
    showCards(this.deck.cards)
  }

  public resetDeck = () => {
    this.isComplete = false
    this.step = 0
    this.deck = new Deck()
    showCards(this.deck.cards)
  }

  private addStep (): void {
    this.step += 1
  }

  private checkDeck (): void {
    this.isComplete = this.deck.cards.every((card) => card.isOpen)
  }

  public openCard (card: Card): void {
    if (card.isOpen || this.isComplete || (this.firstCard && this.secondCard)) return

    card.flip()

    if (!this.firstCard) this.firstCard = card
    else if (!this.secondCard) this.secondCard = card

    if (this.firstCard && this.secondCard) this.checkPair()

    this.addStep()
  }

  private resetPair (): void {
    if (this.firstCard)  this.firstCard.flip()
    if (this.secondCard) this.secondCard.flip()
    this.firstCard = null
    this.secondCard = null
  }

  private checkPair (): void {
    if (this.firstCard?.value === this.secondCard?.value) {
      this.checkDeck()
      this.firstCard = null
      this.secondCard = null
    } else {
      setTimeout(() => {
        this.resetPair()
      }, DELAY_MS)
    }
  }
}
