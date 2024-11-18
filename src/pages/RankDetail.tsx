import { FC } from 'react'
import { Link, LoaderFunction, useLoaderData } from 'react-router-dom'
import { Image } from '@nextui-org/react'

import { Rank } from '../models'
import { getResult } from '../api/client.ts'
import { convertTime } from '../utils'
// import { UserImage } from '../constants'

// eslint-disable-next-line react-refresh/only-export-components
export const resultLoader: LoaderFunction = async ({ params }): Promise<Record<'rank', Rank>> => {
  const rank = await getResult(Number(params.resultId))
  return { rank }
}

const RankDetail: FC = () => {
  const { rank } = useLoaderData() as Record<'rank', Rank>

  return (
    <>
      <Link to={`/`}>
        <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
      </Link>

      <div className="wrapper user h-[625px]">
        <h2 className="text-xl font-bold text-black">Result info:</h2>

        <div className="justify-self-center">
          <Image
            width={200}
            height={200}
            alt="NextUI hero Image with delay"
            src={rank.photo}
          />
        </div>


        <div>
          <p className="text-left">
            <span className="text-black">Name:</span> {rank.user}
          </p>

          <p className="text-left">
            <span className="text-black">Date and time:</span> {convertTime(new Date(rank.time).toString())}
          </p>

          <p className="text-left">
            <span className="text-black">Steps:</span> {rank.steps}
          </p>

          <p className="text-left">
            <span className="text-black">Comment:</span> {rank.comment}
          </p>
        </div>
      </div>
    </>
  )
}

export default RankDetail