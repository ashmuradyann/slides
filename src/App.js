import { useState } from 'react'

import Horizontal from "./components/horizontal/Horizontal"
import Vertical from "./components/vertical/Vertical"

import './app.scss'

function App() {

  const [state, setState] = useState('horizontal')

  return (
    <main>
      <div className="buttons__wrapper">
        <div onClick={() => setState("horizontal")}>Horizontal</div>
        <div onClick={() => setState("vertical")}>Vertical</div>
      </div>
      {state === 'horizontal' && <Horizontal />}
      {state === 'vertical' && <Vertical />}
    </main>
  )
}

export default App
