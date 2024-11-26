import { useContext, useEffect, useRef, useState } from 'react'
import { ACTION_TYPE } from '../store/RanksReducer.ts'
import RanksContext from '../store/RanksContext.ts'

import Board from '../components/Board'

import { Card, Game } from '../models'
import { DELAY_MS } from '../constants'

import '../App.scss'

const Home = () => {
  const { ranks: context, dispatch } = useContext(RanksContext)
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
    if (gameRef.current?.isComplete) {
      console.log(gameRef.current?.isComplete)
      dispatch({ type: ACTION_TYPE.ADD, payload: gameRef.current.step })
    }

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

  useEffect(() => console.log(context), [context])

  return (
    <main>
      <h1 className="mb-8 text-4xl font-bold underline">Game Of Pairs</h1>
      <Board game={gameRef.current} onPress={handleFlipCard} onReset={handleResetGame} />
    </main>
  )
}

export default Home
