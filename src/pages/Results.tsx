import { FC } from 'react'
import { Link, LoaderFunction, useLoaderData } from 'react-router-dom'

import ResultsList from '../components/ResultsList'

import { getResults } from '../api/client.ts'
import { Rank } from '../models'

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async (): Promise<Record<'ranks', Rank[]>> => {
  const ranks = await getResults()
  return { ranks }
}

const Results: FC = () => {
  const { ranks } = useLoaderData() as Record<'ranks', Rank[]>

  return (
    <>
      <Link to={`/`}>
        <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
      </Link>

      <div className="wrapper">
        <h2 className="mb-5 text-xl font-bold text-black">Results</h2>

        <ResultsList list={ranks} />
      </div>
    </>
  )
}

export default Results
