import  { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './config.tsx'

const AppRouter: FC = () => (
  <RouterProvider router={router} />
)

export default AppRouter
