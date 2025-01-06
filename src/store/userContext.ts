import { Action, User } from './userReducer.ts'
import { createContext, Dispatch } from 'react'

type ContextType = {
  user: User,
  dispatch: Dispatch<Action>
}

export const userInitialState = {
  userName: null,
  isLogin: false
}

const initialValue: ContextType = {
  user: userInitialState,
  dispatch: () => {}
}

const UserContext = createContext<ContextType>(initialValue)

export default UserContext
