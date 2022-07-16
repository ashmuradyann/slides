import { useState } from 'react'

import Horizontal from "./components/horizontal/Horizontal"
import Vertical from "./components/vertical/Vertical"

import './app.scss'

function App() {

  const [turn, setTurn] = useState('horizontal')

  return (
    <main>
      <div className="buttons__wrapper">
        <div onClick={() => setTurn("horizontal")}>Horizontal</div>
        <div onClick={() => setTurn("vertical")}>Vertical</div>
      </div>
      {turn === 'horizontal' && <Horizontal />}
      {turn === 'vertical' && <Vertical />}
    </main>
  )
}

export default App
