import './Header.css'
import logo from '../../logo.svg'
import { useState } from 'react';

const Header = () => {
    const [showInfo, setShowInfo] = useState(false);

    const handleMouseEnter = () => {
        setShowInfo(true);
    };

    const handleMouseLeave = () => {
        setShowInfo(false);
    };
    
    return (
        <div className='logo-container'>
            <img className='header-logo' src={logo} alt="logo" />
            <h2>Language Card Project!</h2>
            <img className='question-mark' src="https://cdn-icons-png.flaticon.com/512/5726/5726716.png" 
                alt='question-mark' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            {/* <div className='info'>
                This is the info on hover...
            </div> */}

            {showInfo && (
                <div className="info">
                    <p>This info block shows up on hover on Qmark.</p>
                    <p>You can click on the cards to see more about it.</p>
                    <p>After 2 seconds, card will flip back automatically.</p>
                </div>
            )}

        </div>
    )
}

export default Header;