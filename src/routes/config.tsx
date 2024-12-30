import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home.tsx'
import LeaderBoard, { ranksLoader } from '../pages/LeaderBoard.tsx'
import RankInfo from '../pages/RankInfo.tsx'
import GamePage from '../pages/GamePage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/game',
        element: <GamePage />
      },
      {
        path: '/ranks',
        element: <LeaderBoard />,
        loader: ranksLoader
      },
      {
        path: '/ranks/:rankId',
        element: <RankInfo />
        // loader: rankLoader
      }
    ]
  }
])
