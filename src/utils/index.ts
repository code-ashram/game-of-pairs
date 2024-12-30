import { Card, Rank } from '../models'
import { DELAY_MS } from '../constants'

export const showCards = (cards: Card[]): void => {
  setTimeout(() => cards.forEach((card: Card) => card.flip()), DELAY_MS)
}

export const emptyDeck = new Array(16).fill(null)

export const convertTime = (date: string | Date) => new Date(date).toLocaleString('en-US', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
})

export const getRandomInt = (min: number = 1, max: number = 99): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const addRank = (steps: number): Rank =>
  ({
    id: String(getRandomInt()),
    user: 'Unknown user',
    time: new Date().toISOString(),
    steps,
    photo: 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
    comment: 'Интересная игра!'
  })

export const uuidToNumber = (uuid: string): string =>
  parseInt(uuid.replace(/-/g, '').slice(0, 13), 16).toString()
