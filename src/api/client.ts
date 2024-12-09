import { Rank } from '../models'
import mockData from './mockData.ts'

export const getRanks = async (): Promise<Rank[]> =>
  new Promise((resolve) => setTimeout(() => resolve(mockData), 2000))

export const getRank = async (id: string): Promise<Rank> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const rank = mockData.find((rank) => rank.id === id)
      if (rank) resolve(rank)
      else reject('rank was not founded')
    }, 2000))
