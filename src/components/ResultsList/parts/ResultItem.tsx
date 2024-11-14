import { FC } from 'react'
import { Rank } from '../../../models'

type Props = {
  result: Rank
}

const ResultItem: FC<Props> = ({ result }) => {

  return (
    <li className="resultItem">

      <div className="itemPhoto w-[90px] h-[90px] rounded-full bg-[#4a90e2]"></div>

      <div className="itemInfo text-left text-black">
        <p className="itemUser">{result.user}</p>
        <p className="itemTime">{result.time}</p>
        <p className="itemSteps">steps: {result.steps}</p>
      </div>
    </li>
  )
}

export default ResultItem
