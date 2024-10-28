import { FC } from 'react'

const Card: FC = () => {

  return (
    <div className="cardContainer">
      <div className="card">
        <div className="cardFace front">Front</div>

        <div className="cardFace back">Back</div>
      </div>
    </div>
  )
}

export default Card
