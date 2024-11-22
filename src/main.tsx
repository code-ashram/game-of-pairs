import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root.tsx'
import LeaderBoard from './pages/LeaderBoard.tsx'
import RankDetail from './pages/RankDetail.tsx'
// import RankDetail, { rankLoader } from './pages/RankDetail.tsx'

// import { ranksLoader } from './pages/LeaderBoard.tsx'

import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: 'ranks',
    element: <LeaderBoard />,
    // loader: ranksLoader
  },
  {
    path: '/ranks/:rankId',
    element: <RankDetail />,
    // loader: rankLoader
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
)
