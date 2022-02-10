import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Pokedex from '../containers/Pokedex';

const App = () => {
    return (
        <div>
            <Navbar/>
            <div className='App'>
                <SearchBar/>
                <Pokedex/>
            </div>
        </div>
    );
}

export default App;