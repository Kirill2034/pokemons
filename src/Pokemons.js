import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import style from './Pokemons.module.css';

function Pokemons() {

    const [pokemons, setPokemons] = React.useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')
            .then(response => setPokemons(response.data.results))
    },[])

    console.log(pokemons)

    return (
        <div>
            <ul className={style.push}>
            {pokemons.map((pokemon, index) => {
                return <li key={index}>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
            })}
        </ul>
        </div>
    )
}

export default Pokemons;