import { FC, useRef } from 'react'

import GameCard from './assets/GameCard.tsx'

import { Card, Game } from '../../models/models.ts'

const Board: FC = () => {
  const game = useRef(new Game())

  const handleFlipCard = (card: Card) => {
    game.current.openCard(card)
  }

  return (
    <div className="deck">
      {game.current.deck.cards.map((card) =>
        <GameCard key={card.id} card={card} onPress={handleFlipCard} />)}
    </div>
  )
}

export default Board

// const handleFlipCard = (card: Card) => {
//   game.openCard(card)
//   setGame((prevGame) => {
//     return {
//       ...prevGame,
//       deck: prevGame.deck.cards.map((prevCard) => prevCard.id === card.id ? card : prevCard)
//     }
//   })
// }

// const handleFlipCard = (card: Card) => {
//   card.flip()
//   setGame((prevGame) => prevGame.deck.cards.map((prevCard) => prevCard.id === card.id
//     ? card
//     : prevCard
//   ))
// }
