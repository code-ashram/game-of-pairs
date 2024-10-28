import { FC, useState } from 'react'

import GameCard from './assets/GameCard'
import { Card, Deck } from '../../models/models.ts'

const Board: FC = () => {
  const myDeck = new Deck()

  const [deck, setDeck] = useState<Card[]>(myDeck.deckState)

  const handleFlipDeck = (card: Card) => {
    card.flip()
    setDeck((prevDeck) => prevDeck.map((prevCard) => prevCard.id === card.id
      ? card
      : prevCard
    ))

    console.log(deck)
  }

  return (
    <div className="deck">
      {deck.map((card) =>
        <GameCard key={card.id} card={card} onPress={handleFlipDeck} />)}
    </div>
  )
}

export default Board
