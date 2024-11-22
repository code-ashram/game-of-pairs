import { createContext, Dispatch } from 'react'

import { Action } from './RanksReducer.ts'
import mockData from '../api/mockData.ts'

import { Rank } from '../models'

type ContextType = {
  ranks: Rank[];
  dispatch: Dispatch<Action>;
}

const initialValue: ContextType = {
  ranks: mockData,
  dispatch: () => {}
}

const RanksContext = createContext<ContextType>(initialValue)

export default RanksContext
