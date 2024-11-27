import { FC, useContext, useEffect } from 'react'

import RanksList from '../components/RanksList'
import RanksContext from '../store/RanksContext.ts'
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

  useEffect(() => console.log(ranks), [ranks])

  return (
    <>
      <h2 className="mb-5 text-xl font-bold text-black">Ranks</h2>

      <RanksList ranksSource={ranks} />
    </>
  )
}

export default LeaderBoard
