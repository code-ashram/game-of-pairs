import { Result } from '../models'
import mockData from './mockData.ts'

export const getResults = async (): Promise<Result[]> =>
  new Promise((resolve) => setTimeout(() => {
    console.log(resolve)
    resolve(mockData)
  }, 5000))
