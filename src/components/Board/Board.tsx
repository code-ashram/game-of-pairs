import { FC } from 'react'
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

import Message from '../Message/Message.tsx'
import GameDeck from '../GameDeck'

import { Card, Game } from '../../models'

type Props = {
  game: Game | null
  onReset: () => void
  onPress: (card: Card) => void
}

const Board: FC<Props> = ({ game, onPress, onReset }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="controlPanel">
        <div className="controlPanelButtons">
          <Button color="primary" onPress={onReset}>
            Reset game
          </Button>

          <Button className="ml-3" color="primary" variant="bordered" onPress={() => navigate('/ranks')}>
              Ranks
          </Button>

          {/* <Link to="/ranks"> */}
          {/*   <Button className="ml-3" */}
          {/*           color="primary" */}
          {/*           variant="bordered" */}
          {/*           onPress={(e) => */}
          {/*             (e as unknown as MouseEvent).preventDefault() */}
          {/*           } */}
          {/*   > */}
          {/*     Ranks */}
          {/*   </Button> */}
          {/* </Link> */}
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
    </>
  )
}

export default Board
