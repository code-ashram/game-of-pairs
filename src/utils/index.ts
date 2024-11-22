import { Card } from '../models'
import { DELAY_MS } from '../constants'

export const showCards = (cards: Card[]): void => {
  setTimeout(() => cards.forEach((card: Card) => card.flip()), DELAY_MS)
}

export const emptyDeck = new Array(16).fill(null)

export const convertTime = (date: string) => new Date(date).toLocaleString('en-US', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
})

export const uuidToNumber = (uuid: string): string =>
  parseInt(uuid.replace(/-/g, '').slice(0, 13), 16).toString()
