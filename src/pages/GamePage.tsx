import { FC, useContext, useEffect, useRef, useState } from 'react'

import Board from '../components/Board'

import { Card, Game } from '../models'
import { DELAY_MS } from '../constants'
import { addRank } from '../utils'
import { createRank } from '../api/client.ts'
import userContext from '../store/userContext.ts'
import { useNavigate } from 'react-router-dom'

const GamePage: FC = () => {
  const gameRef = useRef<Game | null>(null)
  const [, setGameState] = useState(false)
  const { user } = useContext(userContext)
  const navigate = useNavigate()

  const rerender = () => {
    setGameState((prev) => !prev)
  }

  const handleFlipCard = (card: Card) => {
    if (gameRef.current) gameRef.current.openCard(card)
    rerender()
  }

  const handleResetGame = () => {
    if (gameRef.current?.isComplete && user.userName) {
      createRank(addRank(gameRef.current.step, user.userName)).then(r => r)
    }

    gameRef.current = null
    setTimeout(() => gameRef.current = new Game(), DELAY_MS)
  }

  useEffect(() => {
    if (!user.userName) navigate('/')

    setTimeout(() => gameRef.current = new Game(), DELAY_MS)

    const intervalId = setInterval(() => {
      setGameState((prev) => !prev)
    }, 100)

    return () => clearInterval(intervalId)
  }, [navigate, user.userName])

  return (
    <Board game={gameRef.current} onPress={handleFlipCard} onReset={handleResetGame} />
  )
}

export default GamePage
