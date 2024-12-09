import { FC, useEffect, useRef, useState } from 'react'

import Board from '../components/Board'

import { Card, Game } from '../models'
import { DELAY_MS } from '../constants'
import { addRank, getRanks } from '../utils'

const GamePage: FC = () => {
  const gameRef = useRef<Game | null>(null)
  const [, setGameState] = useState(false)

  const rerender = () => {
    setGameState((prev) => !prev)
  }

  const handleFlipCard = (card: Card) => {
    if (gameRef.current) gameRef.current.openCard(card)
    rerender()
  }

  const handleResetGame = () => {
    if (gameRef.current?.isComplete) addRank(getRanks(), gameRef.current.step)

    gameRef.current = null
    setTimeout(() => gameRef.current = new Game(), DELAY_MS)
  }

  useEffect(() => {
    setTimeout(() => gameRef.current = new Game(), DELAY_MS)

    const intervalId = setInterval(() => {
      setGameState((prev) => !prev)
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Board game={gameRef.current} onPress={handleFlipCard} onReset={handleResetGame} />
  )
}

export default GamePage
