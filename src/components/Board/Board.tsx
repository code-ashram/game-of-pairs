import { FC, useEffect, useRef, useState } from 'react'
import { Button } from '@nextui-org/react'

import GameCard from '../GameCard/GameCard.tsx'
import Message from '../Message/Message.tsx'

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

    return (
    <>
      <div className="wrapper">
        <div className="controlPanel">
          <Button color="primary" onPress={gameRef.current.resetDeck}>
            Reset game
          </Button>

          <div>
            <p className="text-black text-lg">{gameRef.current.step}</p>
          </div>
        </div>

        <div className="deck">
          {gameRef.current.deck.cards.map((card) => (
            <GameCard key={card.id} card={card} onPress={handleFlipCard} />
          ))}
        </div>

        <Message isOpen={gameRef.current.isComplete} steps={gameRef.current.step} onReset={gameRef.current.resetDeck}/>
      </div>
    </>
  )
}

export default Board
