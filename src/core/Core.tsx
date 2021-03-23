import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Root from '../pages/Root/RoomsView/Root';
import Game from '../pages/Game/Game';
import { StateProvider } from 'core/store/Store';
import { CreateGameProvider } from 'pages/Root/CreateGameContext';
import { WebSocketsProvider } from './WebSockets/WebSocketsProvider';

function Core() {
    return (
        <Router>
            <Switch>
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
                    <CreateGameProvider>
                        <Route exact path="/">
                            <Root />
                        </Route>
                        <Route exact path="/game">
                            <Game />
                        </Route>
                    </CreateGameProvider>
                </WebSocketsProvider>
            </Switch>
        </Router>
    );
}

export default Core;
