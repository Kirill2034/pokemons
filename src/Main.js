import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Pokemons from './Pokemons';
import Pokemon from './Pokemon'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact={true} path='/pokemons' component={Pokemons}/>
                <Route exact={true} path='/pokemon/:name' component={Pokemon}/>
            </Switch>
        </main>
    )
}

export default Main;