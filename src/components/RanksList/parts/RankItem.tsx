import { FC } from 'react'
import { Avatar } from '@nextui-org/react'

import { Rank } from '../../../models'
import { Link } from 'react-router-dom'

type Props = {
  rank: Rank
  link: string
}

const rankItem: FC<Props> = ({ rank, link }) => {

  return (
    <li>
      <Link className="rankItem" to={link} key={rank.id}>
        <div className="rankAvatar">
          <Avatar isBordered color="primary" size="lg" src={rank.photo} />
        </div>

        <div className="itemInfo text-left text-black">
          <p className="itemUser">{rank.user}</p>
          <p className="itemTime">{rank.time}</p>
          <p className="itemSteps">steps: {rank.steps}</p>
        </div>
      </Link>
    </li>
  )
}

export default rankItem
