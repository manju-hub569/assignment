import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import List from './List';
import {Switch, Route, Redirect} from 'react-router-dom';
import './style.css';

function App () {
    return (
        <>
        <Switch>

            <Route exact path='/' component = {SignUp} />
            <Route exact path='/Login' component = {Login} />
            <Route exact path='/List' component = {List} />

        </Switch>
        </>
    )
}

export default App;