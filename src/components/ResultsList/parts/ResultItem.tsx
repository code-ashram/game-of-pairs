import { FC } from 'react'
import { Avatar } from '@nextui-org/react'

import { Rank } from '../../../models'
import { Link } from 'react-router-dom'

type Props = {
  result: Rank
  link: string
}

const ResultItem: FC<Props> = ({ result, link }) => {

  return (
    <li>
      <Link className="resultItem" to={link} key={result.id}>
        <div className="resultAvatar">
          <Avatar isBordered color="primary" size="lg" src={result.photo} />
        </div>

        <div className="itemInfo text-left text-black">
          <p className="itemUser">{result.user}</p>
          <p className="itemTime">{result.time}</p>
          <p className="itemSteps">steps: {result.steps}</p>
        </div>
      </Link>
    </li>
  )
}

export default ResultItem
