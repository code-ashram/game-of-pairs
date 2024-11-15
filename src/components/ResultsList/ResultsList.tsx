import { FC } from 'react'
import { Link } from 'react-router-dom'

import ResultItem from './parts/ResultItem.tsx'

import { Rank } from '../../models'

type Props = {
  list: Rank[]
}

const ResultsList: FC<Props> = ({ list }) => {

  return (
    <ul className="result">
      {list?.map((result) =>
        <Link to={`/results/${result.id}`} key={result.id}>
          <ResultItem result={result} />
        </Link>
      )}
    </ul>
  )
}

export default ResultsList
