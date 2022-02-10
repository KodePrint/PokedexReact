import React from 'react';
import TypesContainer from '../containers/TypesContainer';
import '@styles/pokeCard.css'

const PokeCard = (props) => {
    const {pokemon} = props;
    return (
        <div className="card">
            <picture>
                {console.log(pokemon.sprites.other['official-artwork'])}
                {console.log(typeof(pokemon.sprites.other['official-artwork']))}
                <span className='number'>N.° {pokemon.id}</span>
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
            </picture>
            <div className="info">
                <h3 className='name'>{pokemon.name}</h3>
                <TypesContainer key={pokemon.name} types={pokemon.types}/>
            </div>
        </div>
    );
}

export default PokeCard;