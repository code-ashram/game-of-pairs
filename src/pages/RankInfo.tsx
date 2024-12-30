import { FC } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import { Image } from '@nextui-org/react'

import { Rank } from '../models'
import { convertTime } from '../utils'
import { getRank } from '../api/client.ts'

// eslint-disable-next-line react-refresh/only-export-components
export const rankLoader: LoaderFunction = async ({ params }): Promise<Record<'rank', Rank>> => {
  const rank = await getRank(params.rankId)
  return { rank }
}

const RankInfo: FC = () => {
  const { rank } = useLoaderData() as Record<'rank', Rank>

  return (
    <>
      <div className="user">
        <h2 className="text-xl font-bold text-black">Rank info:</h2>

        <div className="justify-self-center">
          <Image
            width={200}
            height={200}
            alt="NextUI hero Image with delay"
            src={rank?.photo}
          />
        </div>


        <div>
          <p className="text-left">
            <span className="text-black">Name:</span> {rank?.user}
          </p>

          <p className="text-left">
            <span className="text-black">
              Date and time:</span> {rank ? convertTime(new Date(rank?.time).toString()) : null}
          </p>

          <p className="text-left">
            <span className="text-black">Steps:</span> {rank?.steps}
          </p>

          <p className="text-left">
            <span className="text-black">Comment:</span> {rank?.comment}
          </p>
        </div>
      </div>
    </>
  )
}

export default RankInfo
