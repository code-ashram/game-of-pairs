import { FC } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'

import RanksList from '../components/RanksList'

import { getRanks } from '../utils'
import { Rank } from '../models'

// eslint-disable-next-line react-refresh/only-export-components
export const ranksLoader: LoaderFunction = async (): Promise<Record<'ranks', Rank[]>> => {
  const ranks = getRanks()
  return { ranks }
}

const LeaderBoard: FC = () => {
  const { ranks } = useLoaderData() as Record<'ranks', Rank[]>
  console.log(ranks)

  return (
    <>
      <h2 className="mb-5 text-xl font-bold text-black">Ranks</h2>

      <RanksList ranksSource={ranks} />
    </>
  )
}

export default LeaderBoard
