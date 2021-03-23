import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Root from '../pages/Root/RoomsView/Root';
import Game from '../pages/Game/Game';
import { WebSocketsProvider } from './WebSockets/WebSocketsProvider';

function Core() {
    return (
        <WebSocketsProvider
            settings={{
                url: 'ws://localhost:3000',
                socketOptions: {
                    query: {},
                    forceNew: false,
                    transports: ['websocket'],
                    upgrade: false,
                    reconnection: true,
                },
            }}
        >
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
        </WebSocketsProvider>
    );
}

export default Core;
