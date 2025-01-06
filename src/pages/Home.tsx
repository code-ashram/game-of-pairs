import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import '../App.scss'
import { User } from '../store/userReducer.ts'
import LoginForm from '../components/LoginForm'

const Home = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>({ userName: null, isLogin: false })

  const handleLogin = (name: string) => {
    setUser({ userName: name, isLogin: true })
  }

  useEffect(() => {
    if (user.isLogin) navigate('/game')

  }, [navigate, user.isLogin])

  return (
    <main>
      <Link to={`/game`}>
        <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
      </Link>

      <section className="wrapper">
        <Outlet />
      </section>

      <LoginForm userName={user.userName} isOpen={true} onSubmit={handleLogin} />
    </main>
  )
}

export default Home
