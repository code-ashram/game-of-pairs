import { FC, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from '@nextui-org/react'

import RanksContext from '../store/RanksContext.ts'
import { convertTime } from '../utils'

// eslint-disable-next-line react-refresh/only-export-components
// export const rankLoader: LoaderFunction = async ({ params }): Promise<Record<'rank', Rank>> => {
//   const rank = await getrank(Number(params.rankId))
//   return { rank }
// }

const RankInfo: FC = () => {
  // const { rank } = useLoaderData() as Record<'rank', Rank>
  const { rankId } = useParams()
  const { ranks } = useContext(RanksContext)

  const rank = rankId
    ? ranks.find((rank) => rank.id === rankId)
    : null

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
