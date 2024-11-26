import { FC } from 'react'
import { Button } from '@nextui-org/react'

import Message from '../Message/Message.tsx'
import GameDeck from '../GameDeck'

import { Card, Game } from '../../models'
import { Link } from 'react-router-dom'

type Props = {
  game: Game | null
  onReset: () => void
  onPress: (card: Card) => void
}

const Board: FC<Props> = ({ game, onPress, onReset }) => {

  return (
    <>
      <div className="wrapper">
        <div className="controlPanel">
          <div className="controlPanelButtons">
            <Button color="primary" onPress={onReset}>
              Reset game
            </Button>

            <Link to={`ranks`}>
              <Button className="ml-3" color="primary" variant="bordered">
                Ranks
              </Button>
            </Link>
          </div>

          <div>
            <p className="text-black text-lg">{game ? game.step : 0}</p>
          </div>
        </div>

        <GameDeck game={game} onPress={onPress} />

        {
          game &&
          <Message isOpen={game.isComplete} steps={game.step} onReset={onReset} />
        }
      </div>
    </>
  )
}

export default Board
