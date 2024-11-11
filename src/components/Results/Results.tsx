import ResultItem from './parts/ResultItem.tsx'

const Results = () => (
  <div className="wrapper">
    <h2 className="mb-5 text-xl font-bold text-black">Results</h2>

    <ul className="result">
      <ResultItem/>
      <ResultItem/>
      <ResultItem/>
      <ResultItem/>
      <ResultItem/>
      <ResultItem/>
    </ul>
  </div>
)

export default Results
