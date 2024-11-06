import { Card } from '../models'
import { DELAY_FOR_DECK, DELAY_MS } from '../constants'

export const showCards = (cards: Card[]): void => {
  setTimeout(() => cards.forEach((card: Card) => card.flip()), DELAY_MS)
  setTimeout(() => cards.forEach((card: Card) => card.flip()), DELAY_FOR_DECK)
}

