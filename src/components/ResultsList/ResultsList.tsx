import { Rank } from '../../models'
import ResultItem from './parts/ResultItem.tsx'
import { FC } from 'react'

type Props = {
  list: Rank[]
}

const ResultsList: FC<Props> = ({ list }) => (
  <ul className="result">
    {list?.map((result) => <ResultItem key={result.id} result={result} />)}
  </ul>
)
export default ResultsList
