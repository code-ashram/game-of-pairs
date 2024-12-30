import axios from 'axios'
import { Rank } from '../models'

const BASE_URL = 'http://localhost:3000'

const client = axios.create({
  baseURL: BASE_URL
})

export const getRanks = async (): Promise<Rank[]> =>
  client.get<Rank[]>(`/ranks`)
    .then((response) => response.data)

export const getRank = async (id: string | undefined): Promise<Rank> =>
  client.get<Rank>(`/ranks/${id}`)
    .then((response) => response.data)

export const createRank = async (rank: Rank): Promise<Rank> =>
  client.post<Rank>(`/ranks`, rank)
    .then((response) => response.data)
