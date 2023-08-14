import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Header from './components/Header'
import Rules from './components/Rules'
function App() {
  const [modal, setModal] = useState(false)
  return (
    <main className="app">
      {modal &&
        <Rules
          onclick={
            () => setModal(false)
          } />
      }
      <Header />
      <Board />
      <button className='transparent_btn'
        onClick={() => setModal(true)}
      >RULES</button>
    </main>
  )
}

export default App
