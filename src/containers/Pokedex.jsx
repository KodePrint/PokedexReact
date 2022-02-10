import React, { useState, useEffect } from 'react';
import { getPokemonData, getPokemons } from '../utils/api';
import PokeCard from '../components/PokeCard';
import '@styles/pokedex.css'

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])

    const fetchPokemons = async() => {
        try {
            const data = await getPokemons();
            // setPokemons(data.results);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, [])

    return (
        <div className="pokedex-contaner">
            {pokemons.map((pokemon, indx) => {
                return (
                    <PokeCard key={pokemon.name} pokemon={pokemon} />
                )
            })}
        </div>
    );
}

export default Pokedex;