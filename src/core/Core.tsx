import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Root from '../pages/Root/RoomsView/Root';
import Game from '../pages/Game/Game';
import { StateProvider } from 'core/store/Store';
import { CreateGameProvider } from 'pages/Root/CreateGameContext';

function Core() {
    return (
        <Router>
            <Switch>
                <CreateGameProvider>
                    <Route exact path="/">
                        <Root />
                    </Route>
                    <Route exact path="/game">
                        <Game />
                    </Route>
                </CreateGameProvider>
            </Switch>
        </Router>
    );
}

export default Core;
