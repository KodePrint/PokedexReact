import React from 'react';
import '@styles/type.css'

const Type = (props) => {
    const {type} = props
    return (
        <span className={type.type.name}>{type.type.name}</span>
    );
}

export default Type;