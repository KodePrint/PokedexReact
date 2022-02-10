import React from 'react';
import Type from '../components/Type';
import '@styles/typesContainer.css'

const TypesContainer = (props) => {
    const {types} = props;
    return (
        <div className="types">
            {types.map((type) => {
                return (
                    <Type key={type.slot} type={type}/>
                )
            })}            
        </div>
    );
}

export default TypesContainer;