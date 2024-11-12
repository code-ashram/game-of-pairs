import { useEffect, useRef, useState } from 'react'

import Board from '../components/Board'

import { Card, Game } from '../models'
import { DELAY_MS } from '../constants'

import '../App.scss'

const Root = () => {
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
    <main>
      <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>

      <Board game={gameRef.current} onPress={handleFlipCard} onReset={handleResetGame} />
    </main>
  )
}

export default Root
