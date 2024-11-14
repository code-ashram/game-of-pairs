import { Rank } from '../models'
import mockData from './mockData.ts'

export const getResults = async (): Promise<Rank[]> =>
  new Promise((resolve) => setTimeout(() => resolve(mockData), 2000))
