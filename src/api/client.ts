import axios from 'axios'
import { Rank } from '../models'
import mockData from './mockData.ts'

const BASE_URL = 'http://localhost:3000'

const client = axios.create({
  baseURL: BASE_URL
})

export const getRanks = async (): Promise<Rank[]> =>
  client.get<Rank[]>(`/ranks`)
    .then((response) => response.data)

export const getRank = async (id: string): Promise<Rank> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const rank = mockData.find((rank) => rank.id === id)
      if (rank) resolve(rank)
      else reject('rank was not founded')
    }, 2000))
