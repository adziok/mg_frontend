import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Root from '../pages/Root/RoomsView/Root';
import Game from '../pages/Game/Game';

function Core() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Root />
                </Route>
                <Route exact path="/game">
                    <Game />
                </Route>
            </Switch>
        </Router>
    );
}

export default Core;
