import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import style from './Pokemon.module.css';

function Pokemon(props) {
    const pokemonName = props.match.params.name

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => console.log(response))
    },[])
    return (
        <div className={style.imageBox}>
            <div className="border"></div>
                <img src={`https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`} />
            <div className={style.imageContent}>
                <h3 className={style.imageHeader}>{pokemonName}</h3>
            </div>
        </div>
    )
}

export default Pokemon;