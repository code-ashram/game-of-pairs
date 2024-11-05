import { FC, useEffect, useRef, useState } from 'react'

import GameCard from '../GameCard/GameCard.tsx'
import { Card, Game } from '../../models'
import { Button } from '@nextui-org/react'
import Message from '../Message/Message.tsx'

const Board: FC = () => {
  const [, setGameState] = useState(false)
  const gameRef = useRef(new Game())

  const rerender = () => {
    setGameState((prev) => !prev)
  }

  const handleFlipCard = (card: Card) => {
    gameRef.current.openCard(card)
    rerender()

    console.log(gameRef.current.isComplete)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGameState((prev) => !prev)
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  // TODO: add check on game completeness
  return (
    <>
      <div className="wrapper">
        <div className="controlPanel">
          <Button color="primary">Reset game</Button>

          <div>
            {/* TODO: Add dynamic counter */}
            <p className="text-black text-lg">{gameRef.current.step}</p>
          </div>
        </div>

        <div className="deck">
          {gameRef.current.deck.cards.map((card) => (
            <GameCard key={card.id} card={card} onPress={handleFlipCard} />
          ))}
        </div>
      </div>

      {/* {gameRef.current.isComplete && <Message steps={gameRef.current.step} />} */}
      {gameRef.current.isComplete
        && <div>
          <p>
            Hail! {gameRef.current.step}
          </p>
        </div>}
    </>
  )
}

export default Board
