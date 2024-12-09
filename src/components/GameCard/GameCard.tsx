import { FC } from 'react'

import { Card } from '../../models'


type Props = {
  card: Card
  onPress: (card: Card) => void
}

const GameCard: FC<Props> = ({ card, onPress }) => (
  <div className="cardContainer" onClick={() => onPress(card)}>
      <div className={`card ${card.isOpen ? 'open' : ''}`}>
        <div className="cardFace front"></div>

        <div className="cardFace back">{card.value}</div>
      </div>
  </div>
)

export default GameCard
