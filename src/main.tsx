import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root.tsx'
import LeaderBoard from './pages/LeaderBoard.tsx'
import RankDetail, { resultLoader } from './pages/RankDetail.tsx'

import { resultsLoader } from './pages/LeaderBoard.tsx'

import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: 'results',
    element: <LeaderBoard />,
    loader: resultsLoader
  },
  {
    path: '/results/:resultId',
    element: <RankDetail />,
    loader: resultLoader
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
)
