import React from 'react';

import logo  from '@logos/Pokemon.png'
import '@styles/navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="container">
                <picture>
                    <img className='navbar-image' src={logo} alt="Pokemon-Logo" />
                </picture>
            </div>
        </nav>
    );
}

export default Navbar;