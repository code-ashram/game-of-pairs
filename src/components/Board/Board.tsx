import { FC, useEffect, useRef, useState } from 'react'

import GameCard from '../GameCard/GameCard.tsx'
import { Card, Game } from '../../models'

const Board: FC = () => {
  const [, setGameState] = useState(false)
  const gameRef = useRef(new Game())

  const rerender = () => {
    setGameState((prev) => !prev)
  }

  const handleFlipCard = (card: Card) => {
    gameRef.current.openCard(card)
    rerender()
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGameState((prev) => !prev)
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  // TODO: add check on game completeness
  return (
    <div className="deck">
      {gameRef.current.deck.cards.map((card) => (
        <GameCard key={card.id} card={card} onPress={handleFlipCard} />
      ))}
    </div>
  )
}

export default Board
