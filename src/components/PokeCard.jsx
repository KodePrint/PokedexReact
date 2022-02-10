import React from 'react';
import TypesContainer from '../containers/TypesContainer';
import '@styles/pokeCard.css'

const PokeCard = (props) => {
    const {pokemon} = props;
    return (
        <div className="card">
            <picture>
                <span className='number'>N.° {pokemon.id.toString().padStart(3, 0)}</span>
                <img 
                    loading='lazy' 
                    src={pokemon.sprites.other["official-artwork"].front_default} 
                    alt={pokemon.name} />
                <div className="heart">
                </div>
            </picture>
            <div className="info">
                <h3 className='name'>{pokemon.name}</h3>
                <TypesContainer key={pokemon.name} types={pokemon.types}/>
            </div>
        </div>
    );
}

export default PokeCard;