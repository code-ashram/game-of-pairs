import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useReducer } from 'react'

import UserContext, { userInitialState } from '../store/userContext.ts'
import userReducer, { ACTION_TYPE } from '../store/userReducer.ts'
import LoginForm from '../components/LoginForm'

import '../App.scss'

const Home = () => {
  const [user, dispatch] = useReducer(userReducer, userInitialState)
  const navigate = useNavigate()

  const handleLogin = (name: string) => {
    dispatch({
      type: ACTION_TYPE.LOGIN,
      payload: { userName: name }
    })
  }

  useEffect(() => {
    if (user.userName) navigate('/game')
  }, [navigate, user.userName])

  return (
    <main>
      <Link to={`/game`}>
        <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
      </Link>

      <LoginForm isOpen={user.userName === null && true} onSubmit={handleLogin} />

      <section className="wrapper">
        <UserContext.Provider value={{ user, dispatch }}>
          <Outlet />
        </UserContext.Provider>
      </section>
    </main>
  )
}

export default Home
