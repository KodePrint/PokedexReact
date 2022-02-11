import React, { useState, useEffect } from 'react';
import { getPokemonData, getPokemons } from '../utils/api';
import PokeCard from '../components/PokeCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

import '@styles/pokedex.css'
import { FavoriteProvider } from '../contexts/favoritesContex';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    // Paginacion
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    

    // Para la siguiente pagina
    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    };
    // Para la pagina anterior
    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const fetchPokemons = async() => {
        try {
            setLoading(true);
            const data = await getPokemons(12, 12*page);
            // setPokemons(data.results);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            setPokemons(results)
            setTotal(Math.ceil(data.count / 12))
            setLoading(false)
        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, [page])

    return (
        <div className="pokedex">
            <SearchBar/>
            <Pagination 
                page={page + 1} 
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage} />
            <div className="pokedex-contaner">
                {
                    loading ? (<div className="loading">Cargando</div>) :
                    pokemons.map((pokemon, indx) => {
                        return (
                            <PokeCard key={pokemon.name} pokemon={pokemon} />
                        )
                    })
                }
            </div>
            <Pagination 
                page={page + 1} 
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage} />
        </div>
    );
}

export default Pokedex;