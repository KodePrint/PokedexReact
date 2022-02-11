import React, { useState } from 'react';
import {searchPokemon} from '../utils/api'

import '@styles/searchbar.css'

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState()

  const onChange = (e) => {
    setSearch(e.target.value)
    const searchButton = document.querySelector('.search')
  }
  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data)
  }

    return (
      <div className='searchbar-container'>
        <div className="searchbar">
            <input 
              type="text" 
              placeholder='Buscar pokémon por No. o nombre' 
              onChange={onChange} />
        </div>
        <div className="searchbar-button">
          <button
              className="search" 
              onClick={onClick}>
              <i className="fas fa-search"></i>
            </button>
        </div>
        {pokemon && 
        <div className="valor">
            <p className="number">N.° {pokemon.id.toString().padStart(3, 0)}</p>
            <p className="name">Nombre: {pokemon.name}</p>
            <p className="name">Peso: {pokemon.weight}</p>
            <img src={pokemon.sprites.front_default} alt="" />
            {/* <img src={pokemon.sprites.other.dream_world.front_default} alt="" /> */}
        </div>
        }
      </div>  
    );
}

export default SearchBar;