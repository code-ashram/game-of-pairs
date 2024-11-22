import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import RanksList from '../components/RanksList'
import RanksContext from '../srore/RanksContext.ts'
// import { Link, LoaderFunction, useLoaderData } from 'react-router-dom'

// import { getranks } from '../api/client.ts'
// import { Rank } from '../models'

// eslint-disable-next-line react-refresh/only-export-components
// export const ranksLoader: LoaderFunction = async (): Promise<Record<'ranks', Rank[]>> => {
//   const ranks = await getranks()
//   return { ranks }
// }

const LeaderBoard: FC = () => {
  // const { ranks } = useLoaderData() as Record<'ranks', Rank[]>
  const { ranks } = useContext(RanksContext)

  return (
    <>
      <Link to={`/`}>
        <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
      </Link>

      <div className="wrapper">
        <h2 className="mb-5 text-xl font-bold text-black">ranks</h2>

        <RanksList ranksSource={ranks} />
      </div>
    </>
  )
}

export default LeaderBoard
