import { FC, useState } from 'react'

import GameCard from './assets/GameCard.tsx'

import { Card, Game } from '../../models/models.ts'

const Board: FC = () => {
  const [game, setGame] = useState<Game>(new Game())

  const handleFlipCard = (card: Card) => {
    game.openCard(card)
    setGame((prevGame) => {
      const updatedGame: Game = {...prevGame, deck: deck.generateNewDeck()}

      return {
        ...prevGame,
        deck: prevGame.deck.cards.map((prevCard) => prevCard.id === card.id ? card : prevCard)
      }
    })
  }

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

  return (
    <div className="deck">
      {game.deck.cards.map((card) =>
        <GameCard key={card.id} card={card} onPress={handleFlipCard} />)}
    </div>
  )
}

export default Board
