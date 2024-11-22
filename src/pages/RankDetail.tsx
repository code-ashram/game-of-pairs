import { FC, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Image } from '@nextui-org/react'

import RanksContext from '../srore/RanksContext.ts'

// eslint-disable-next-line react-refresh/only-export-components
// export const rankLoader: LoaderFunction = async ({ params }): Promise<Record<'rank', Rank>> => {
//   const rank = await getrank(Number(params.rankId))
//   return { rank }
// }

const RankDetail: FC = () => {
  // const { rank } = useLoaderData() as Record<'rank', Rank>
  const { rankId } = useParams()
  const { ranks } = useContext(RanksContext)

  const rank = rankId
    ? ranks.find((rank) => rank.id === rankId)
    : null

  return (
    <>
      <Link to={`/`}>
        <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
      </Link>

      <div className="wrapper user h-[625px]">
        <h2 className="text-xl font-bold text-black">rank info:</h2>

        <div className="justify-self-center">
          <Image
            width={200}
            height={200}
            alt="NextUI hero Image with delay"
            src={rank?.photo}
            // src={ranks[0].photo}
          />
        </div>


        <div>
          <p className="text-left">
            <span className="text-black">Name:</span> {rank?.user}
            {/* <span className="text-black">Name:</span> {ranks[0].user} */}
          </p>

          <p className="text-left">
            {/* <span className="text-black">Date and time:</span> {convertTime(new Date(rank?.time).toString())} */}
            {/* <span className="text-black">Date and time:</span> {convertTime(new Date(ranks[0].time).toString())} */}
          </p>

          <p className="text-left">
            <span className="text-black">Steps:</span> {rank?.steps}
            {/* <span className="text-black">Steps:</span> {ranks[0].steps} */}
          </p>

          <p className="text-left">
            <span className="text-black">Comment:</span> {rank?.comment}
            {/* <span className="text-black">Comment:</span> {ranks[0].comment} */}
          </p>
        </div>
      </div>
    </>
  )
}

export default RankDetail
