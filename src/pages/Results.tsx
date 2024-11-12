import { Link, LoaderFunction, useLoaderData } from 'react-router-dom'
import { FC } from 'react'

import ResultsList from '../components/ResultsList'

import { getResults } from '../api/client.ts'
import { Result } from '../models'


// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async () => {
  const results = await getResults()

  return { results }
}

const Results: FC = () => {

  const { results }  = useLoaderData()

  console.log(results)

  return (
    <>
      <Link to={`/`}>
        <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
      </Link>

      <div className="wrapper">
        <h2 className="mb-5 text-xl font-bold text-black">Results</h2>


        <ResultsList list={results} />
      </div>
    </>
  )
}

export default Results
