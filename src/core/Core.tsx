import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Root from '../pages/Root/RoomsView/Root';
import Game from '../pages/Game/Game';
import { CreateGameProvider } from 'pages/Root/CreateGameContext';
import { SocketSettings, WebSocketsProvider } from './WebSockets/WebSocketsProvider';
import { getConfig } from '../configs';

const config = getConfig();

const createConfig = (playerId: string) => ({
    url: config.baseWs,
    socketOptions: {
        query: { playerId },
        forceNew: false,
        transports: ['websocket'],
        upgrade: false,
        reconnection: true,
    },
});

const createGuest = (nick: string, image: string) => {
    return axios.post(config.baseUrl + 'player', {
        nick,
        image,
    });
};

const initApp = (): any => {
    const lsPlayerId = localStorage.getItem('playerId');

    if (!lsPlayerId) {
        return createGuest(
            'user' + Date.now(),
            'https://i.pinimg.com/564x/c8/c1/8e/c8c18ed9738364e33ab4710e52905652.jpg'
        ).then(({ data: aPlayerId }: any) => {
            localStorage.setItem('playerId', aPlayerId);
            return createConfig(aPlayerId);
        });
    } else {
        return createConfig(lsPlayerId);
    }
};

function Core() {
    return (
        <Router>
            <Switch>
                <WebSocketsProvider settings={initApp() as any}>
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
