import { FC } from 'react'

import ResultItem from './parts/ResultItem.tsx'

import { Rank } from '../../models'

type Props = {
  list: Rank[]
}

const ResultsList: FC<Props> = ({ list }) => {

  return (
    <ul className="result">
      {list?.map((result) =>
        <ResultItem result={result} link={`/results/${result.id}`} />
      )}
    </ul>
  )
}

export default ResultsList
