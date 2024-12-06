import { FC, StrictMode } from 'react'
import { NextUIProvider } from '@nextui-org/react'

import AppRouter from './routes/AppRouter.tsx'

import './index.scss'

export const App: FC = () => {

  return (
    <StrictMode>
      <NextUIProvider>
          <AppRouter />
      </NextUIProvider>
    </StrictMode>
  )
}
