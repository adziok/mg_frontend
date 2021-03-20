import React from 'react';
import 'pages/Game/Game.scss';
import Container from 'components/Container/Container';
import Content from 'components/Content/Content';
import Header from 'components/Header/Header';
import { TopMenuButton } from 'components/Buttons';
import PlayersList from './PlayersList/PlayersList';

function Game() {
    return (
        <Container classNames="game">
            <Header>
                <div className="headerMenu">
                    <TopMenuButton text="Leave game" />
                    <TopMenuButton text="About us" />
                </div>
            </Header>

            <Content>
                <div className="playersList">
                    <PlayersList />
                </div>
                <div className="headText"></div>
                <div className="countdownBar"></div>
                <div className="answers">
                    <div className="answer"></div>
                    <div className="answer"></div>
                    <div className="answer"></div>
                    <div className="answer"></div>
                </div>
            </Content>
        </Container>
    );
}

export default Game;
