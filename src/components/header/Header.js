import './Header.css'
import logo from '../../logo.svg'

const Header = () => {
    return (
        <div className='logo-container'>
            <img className='header-logo' src={logo} alt="logo" />
            <h2>Language Card Project!</h2>
        </div>
    )
}

export default Header;