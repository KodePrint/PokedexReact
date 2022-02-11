import React from 'react'

const ImagePokemon = (props) => {
    const {alt, url} = props;
    return (
        <img 
            src={url} 
            alt={alt} />
    );
}

export default ImagePokemon;
