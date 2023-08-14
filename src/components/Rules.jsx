import rules from '../images/modal.png'
import '../stylesheets/Rules.css'
const Rules = ({ onclick }) => {
    return (
        <div className="modal">
            <div className="rules">
                <p><span>RULES</span>
                    <span
                        className='close'
                        onClick={onclick}
                    >X</span></p>
                <img src={rules} alt="rules" />
            </div>
        </div>)
}

export default Rules