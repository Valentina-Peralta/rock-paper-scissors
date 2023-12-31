import '../stylesheets/Nav.css'
const Header = ({ score }) => {
    return (
        <header>
            <h1>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </h1>
            <div className="score">
                <h3>SCORE</h3>
                <p>{score}</p>
            </div>
        </header>)
}

export default Header