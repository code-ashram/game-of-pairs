import './App.scss'
import { Button } from '@nextui-org/react'
import Deck from './components/Deck'

function App () {

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold underline">
        Game Of Pairs
      </h1>

      <div className="wrapper">
        <div className="controlPanel">
          <Button color="primary">
            Reset game
          </Button>

          <div>
            <p className="text-black text-lg">
              Steps: 14
            </p>
          </div>
        </div>

        <Deck />
      </div>
    </>
  )
}

export default App
