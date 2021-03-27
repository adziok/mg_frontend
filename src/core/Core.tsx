import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Root from '../pages/Root/RoomsView/Root';
import Game from '../pages/Game/Game';
import { CreateGameProvider } from 'pages/Root/CreateGameContext';
import { SocketSettings, WebSocketsProvider } from './WebSockets/WebSocketsProvider';
import { getConfig } from '../configs';
import Room from 'pages/Room/Room';
import { getCurrentRoom } from '../utils/actions';
import { useCoreController } from './CoreController';

function Core() {
    const [state, { initApp }] = useCoreController();
    return (
        <WebSocketsProvider settings={initApp() as any}>
            <Switch>
                <CreateGameProvider>
                    <Route exact path="/">
                        <Root />
                    </Route>
                    <Route exact path="/game">
                        <Game />
                    </Route>
                    <Route exact path="/room/:id/:join?">
                        <Room />
                    </Route>
                </CreateGameProvider>
            </Switch>
        </WebSocketsProvider>
    );
}

export default Core;
