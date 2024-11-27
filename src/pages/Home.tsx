import '../App.scss'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {

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
