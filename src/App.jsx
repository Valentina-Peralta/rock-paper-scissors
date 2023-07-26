import './App.css'
import Board from './components/Board'
import Header from './components/Header'

function App() {

  return (
    <main className="app">
      <Header />
      <Board />
      <button className='transparent_btn'>RULES</button>
    </main>
  )
}

export default App
