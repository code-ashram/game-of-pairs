import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import LeaderBoard from '../pages/LeaderBoard.tsx'
import RankInfo from '../pages/RankInfo.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/ranks',
    element: <LeaderBoard />
    // loader: ranksLoader
  },
  {
    path: '/ranks/:rankId',
    element: <RankInfo />
    // loader: rankLoader
  }
])
