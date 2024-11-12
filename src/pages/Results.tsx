import { Link } from 'react-router-dom'
import { FC } from 'react'
import ResultsList from '../components/ResultsList'
import mockData from '../api/mockData.ts'


const Results: FC = () => (
  <>
    <Link to={`/`}>
      <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
    </Link>

    <div className="wrapper">
      <h2 className="mb-5 text-xl font-bold text-black">Results</h2>

      <ResultsList list={mockData} />
    </div>
  </>

)

export default Results
