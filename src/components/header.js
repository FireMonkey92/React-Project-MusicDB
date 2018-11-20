import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/"> 
            <div className='header'>Music-DB</div>
            </Link>
        </header>
    )
}

export default Header;