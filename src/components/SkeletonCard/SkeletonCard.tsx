import { FC } from 'react'

import { Skeleton } from '@nextui-org/react'

const SkeletonCard: FC = () => (
  <div className="cardContainer">
    <Skeleton className='skeleton'>
      <div className="card"></div>
    </Skeleton>
  </div>
)

export default SkeletonCard
