import { createContext, Dispatch } from 'react'

import { Action } from './RanksReducer.ts'

import { Rank } from '../models'
import { ranksLS } from '../utils'

type ContextType = {
  ranks: Rank[];
  dispatch: Dispatch<Action>;
}

const initialValue: ContextType = {
  ranks: ranksLS,
  dispatch: () => {}
}

const RanksContext = createContext<ContextType>(initialValue)

export default RanksContext
