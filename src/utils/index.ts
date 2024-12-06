import { Card, Rank } from '../models'
import { DELAY_MS } from '../constants'
import user from '../img/user.png'

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

export const addRank = (list: Rank[], steps: number) =>
  localStorage.setItem('ranks', JSON.stringify(list = [...list, {
    id: String(getRandomInt()),
    user: 'Unknown user',
    time: new Date().toISOString(),
    steps,
    photo: user,
    comment: 'Интересная игра!'
  }]))

export const getRanks = (): Rank[] => {
  const item = localStorage.getItem('ranks')
  return item ? JSON.parse(item) : []
}


// export const getRanks = (): Rank[] =>
//   localStorage.getItem('ranks')
//     ? JSON.parse('ranks')
//     : []

export const uuidToNumber = (uuid: string): string =>
  parseInt(uuid.replace(/-/g, '').slice(0, 13), 16).toString()
