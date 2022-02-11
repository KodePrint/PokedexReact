import React, {useState} from 'react';
import Navbar from './Navbar';
import Pokedex from '../containers/Pokedex';
import { FavoriteProvider } from '../contexts/favoritesContex';

const App = () => {
    // Para el uso del contex
    const [favorites, setFavorites] = useState(["charmeleon"]);

    const updateFavoritePokemons = (name) => {
        const update = [...favorites]
        const isFavorite = favorites.indexOf(name);
        if(isFavorite >= 0) {
            update.splice(isFavorite, 1)
        } else {
            update.push(name);
        }
        setFavorites(update)
    }

    return (
        <FavoriteProvider value={{
            favoritePokemons: favorites, 
            updateFavoritePokemons: updateFavoritePokemons}}>
        <div>
            <Navbar/>
            <div className='App'>
                <Pokedex/>
            </div>
        </div>
        </FavoriteProvider>
    );
}

export default App;