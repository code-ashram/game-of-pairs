import { FC } from 'react'

import RankItem from './parts/RankItem.tsx'

import { Rank } from '../../models'

type Props = {
  ranksSource: Rank[]
}

const RanksList: FC<Props> = ({ ranksSource }) => {

  return (
    <ul className="rank">
      {ranksSource?.map((rank) =>
        <RankItem key={rank.id} rank={rank} link={`/ranks/${rank.id}`} />
      )}
    </ul>
  )
}

export default RanksList
