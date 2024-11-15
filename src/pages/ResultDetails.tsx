import { FC } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import { Rank } from '../models'
import { getResult } from '../api/client.ts'

// eslint-disable-next-line react-refresh/only-export-components
export const resultLoader: LoaderFunction = async ({ params }): Promise<Record<'rank', Rank>> => {
  const rank = await getResult(Number(params.resultId))
  return { rank }
}

const ResultDetails: FC = () => {
  const { rank } = useLoaderData() as Record<'rank', Rank>

  return (
    <div className="wrapper">
      <p>{rank.user}</p>
    </div>
  )
}

export default ResultDetails
