import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = (value) => {    // mode function
        setIsDarkMode(value);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <header>
            <h1> <img src="ShoppyGlobe.png"/> <Link to=''> ShoppyGlobe </Link> </h1>
            <nav>
                <Link to='' className='nav-link'> Home </Link>
                <Link to='products' className='nav-link'> Products </Link>
                <Link to='card' className='nav-link'> Cart </Link>
                <Link to='sign' className='nav-link'> SignIn </Link>
                <button onClick={() => toggleTheme(!isDarkMode)}>
                    <i className={`fa-solid ${isDarkMode ? 'fa-toggle-on' : 'fa-toggle-off'}`}></i>
                </button>
            </nav>
        </header>
    );
}

export default Header;
