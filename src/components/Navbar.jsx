import React from 'react';

import logo  from '@logos/Pokemon.png'
import '@styles/navbar.css'
import FavoriteContext from '../contexts/favoritesContex';

const {useContext} = React;

const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)

    return (
        <nav className='nav'>
            <div className="container">
                <picture>
                    <img className='navbar-image' src={logo} alt="Pokemon-Logo" />
                </picture>
                <ul className="menu">
                    <li>algo</li>
                    <li>algo</li>
                </ul>
                <div className="favorits">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85b042e7-8718-4531-8467-c2fb11cfc812/d58cz2u-216c927b-8a7d-4005-acaa-c5516af46baa.png/v1/fill/w_900,h_814,strp/pokeheart_by_remoraid_d58cz2u-fullview.webp?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE0IiwicGF0aCI6IlwvZlwvODViMDQyZTctODcxOC00NTMxLTg0NjctYzJmYjExY2ZjODEyXC9kNThjejJ1LTIxNmM5MjdiLThhN2QtNDAwNS1hY2FhLWM1NTE2YWY0NmJhYS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6XdRhGELyilkQsZGhpFk0TrGfxMCNSr1FqvfniezI3U" alt="" />
                    <span>{favoritePokemons.length}</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;