import React, { useEffect } from 'react';
import axios from 'axios';
import style from './Pokemon.module.css';
import {Link} from 'react-router-dom';

function Pokemon(props) {
    const pokemonName = props.match.params.name

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response)
    },[pokemonName])
    return (
        <div className={style.imageBox}>
            <div className="border"></div>
                <img src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`} alt={pokemonName}/>
            <div className={style.imageContent}>
                <h3 className={style.imageHeader}>{pokemonName}</h3>
            </div>
            <Link to='/pokemons'>Назад</Link>
        </div>
    )
}

export default Pokemon;