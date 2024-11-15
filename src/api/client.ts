import { Rank } from '../models'
import mockData from './mockData.ts'

export const getResults = async (): Promise<Rank[]> =>
  new Promise((resolve) => setTimeout(() => resolve(mockData), 2000))

export const getResult = async (id: number): Promise<Rank> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const rank = mockData.find((rank) => rank.id === id)
      if (rank) resolve(rank)
      else reject('rank was not founded')
    }, 2000))
