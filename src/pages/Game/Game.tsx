import React from 'react';
import 'pages/Game/Game.scss';
import Container from 'components/Container/Container';
import Content from 'components/Content/Content';
import Header from 'components/Header/Header';
import { BaseButton } from 'components/Buttons';
import PlayersList from './PlayersList/PlayersList';
import GameBoard from './GameBoard/GameBoard';
import { Link } from 'react-router-dom';

function Game() {
    return (
        <Container classNames="game">
            <Header>
                <div className="headerMenu">
                    <Link to="/" className="headerMenu__leaveButton">
                        {<BaseButton text="Leave game" />}
                    </Link>
                    <BaseButton text="About us" />
                </div>
            </Header>

            <Content>
                <div className="playersList">
                    <PlayersList />
                </div>
                <div className="gameBoard">
                    <GameBoard />
                </div>
            </Content>
        </Container>
    );
}

export default Game;
