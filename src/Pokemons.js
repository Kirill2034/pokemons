import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import style from './Pokemons.module.css';
import PokemonItem from './component/PokemonItem/PokemonItem'

function Pokemons() {

    const [pokemons, setPokemons] = React.useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=15')
            .then(response => setPokemons(response.data.results))
    },[])

    return (
        <div className={style.wrapper}>
                <ul className={style.ul}>
                    {pokemons.map((pokemon, index) => {
                        return <li key={index}>
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <PokemonItem 
                                name={pokemon.name} 
                                img={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                                alt={pokemon.name}
                            />
                        </Link>
                    </li>
                    })}
                </ul>
        </div>
    )
}

export default Pokemons;