const BaseUrl = process.env.API;

export const searchPokemon = async (pokemon) => {
    try {
        let url = `${BaseUrl}pokemon/${pokemon}`
        const response = await fetch(url);
        const data = await response.json()
        return data;
    } catch(err) {
        console.log(err.message)
    }
}

export const getPokemons = async (limit=12, offset=0) => {
    try {
        let url = `${BaseUrl}pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err.message)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    } catch(err) {
        console.log(err.message)
    }
}