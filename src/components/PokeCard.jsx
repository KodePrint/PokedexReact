import React, {Suspense, lazy} from 'react';
import TypesContainer from '../containers/TypesContainer';
import '@styles/pokeCard.css';
import FavoriteContext from '../contexts/favoritesContex';

const Imagen = lazy(() => import('./ImagePokemon'));
//import ImagePokemon from './ImagePokemon';

const {useContext} = React;

const PokeCard = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props;
    const likePokemon = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }
    return (
        <div className="card">
            <picture onClick={likePokemon} >
                <span className='number'>N.° {pokemon.id.toString().padStart(3, 0)}</span>
                <Suspense fallback={<h1>Cargando..!</h1>}>
                    <Imagen 
                    alt={pokemon.name} 
                    url={pokemon.sprites.other["official-artwork"].front_default} />
                    {/* url={pokemon.sprites.front_default} /> */}
                </Suspense>
                <div className="heart">
                </div>
                { favoritePokemons.includes(pokemon.name) ? (<i className="like fas fa-heart"></i>) : (<span></span>) }
            </picture>
            <div className="info">
                <h3 className='name'>{pokemon.name}</h3>
                <TypesContainer key={pokemon.name} types={pokemon.types}/>
            </div>
        </div>
    );
}

export default PokeCard;