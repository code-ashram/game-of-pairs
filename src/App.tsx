import { FC, StrictMode, useReducer } from 'react'
import { NextUIProvider } from '@nextui-org/react'

import AppRouter from './routes/AppRouter.tsx'

import { rankReducer } from './store/RanksReducer.ts'
import RanksContext from './store/RanksContext.ts'

import mockData from './api/mockData.ts'

import './index.scss'

export const App: FC = () => {
  const [ranks, dispatch] = useReducer(rankReducer, mockData)

  return (
    // <StrictMode>
      <NextUIProvider>
        <RanksContext.Provider value={{ ranks, dispatch }}>
          <AppRouter />
        </RanksContext.Provider>
      </NextUIProvider>
    // </StrictMode>
  )
}
