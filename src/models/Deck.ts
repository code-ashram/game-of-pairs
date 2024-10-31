import { Card } from './Card.ts'

export class Deck {
  public cards: Card[]

  constructor () {
    this.cards = this.generateNewDeck()
  }

  private generateNewDeck = () =>
    new Array(8)
      .fill(null)
      .flatMap((_, index) => [new Card(index + 1), new Card(index + 1)])
      .sort((a, b) => a.id.localeCompare(b.id))
}
