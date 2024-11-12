import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/Root.tsx'
import Results from './pages/Results.tsx'
import ResultDetails from './pages/ResultDetails.tsx'

import { loader } from './pages/Results.tsx'

import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: 'results',
    element: <Results/>,
    children: [
      {
        path: 'results/:resultId',
        element: <ResultDetails />,
        loader: loader
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
)
