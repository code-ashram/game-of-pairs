import { FC } from 'react'

import GameCard from '../GameCard'
import SkeletonCard from '../SkeletonCard'

import { emptyDeck } from '../../utils'
import { Card, Game } from '../../models'

type Props = {
  game: Game | null
  onPress: (card: Card) => void
}

const GameDeck: FC<Props> = ({ game, onPress }) => (
  <div className="deck">
    {game
      ? game.deck.cards.map((card) => (
        <GameCard key={card.id} card={card} onPress={onPress} />
      ))
      : emptyDeck.map((_, index) => <SkeletonCard key={index} />)
    }
  </div>
)

export default GameDeck
