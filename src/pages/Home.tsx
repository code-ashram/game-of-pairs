import '../App.scss'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {
  const navigate = useNavigate()
  const [game, setGame] = useState<boolean>(true)

  useEffect(() => {
    if (game) navigate('/game')
    setGame(false)
  }, [game, navigate])

  return (
    <main>
      <Link to={`/game`}>
        <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
      </Link>

      <section className="wrapper">
        <Outlet />
      </section>
    </main>
  )
}

export default Home
