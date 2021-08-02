import React from 'react';
import style from './PokemonItem.module.css'

function PokemonItem(props) {
    return(
        <div className={style.wrapper}>
            <img src={props.img} alt={props.alt}/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default PokemonItem;