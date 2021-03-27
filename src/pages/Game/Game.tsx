import React from 'react';
import 'pages/Game/Game.scss';
import Container from 'components/Container/Container';
import Content from 'components/Content/Content';
import Header from 'components/Header/Header';
import { BaseButton } from 'components/Buttons';
import Scoreboard from './Scordeboard/Scoreboard';
import GameBoard from './GameBoard/GameBoard';
import { Link } from 'react-router-dom';

function Game() {
    return (
        <Container classNames="game">
            <Header>
                <div className="headerMenu">
                    <Link to="/" className="headerMenu__leaveButton">
                        {<BaseButton text="Leave game" style="fillRed" />}
                    </Link>
                    <BaseButton text="Invite friends" style="fillBlue" />
                    <BaseButton text="About us" />
                </div>
            </Header>

            <Content>
                <div className="playersList">
                    <Scoreboard />
                </div>
                <div className="gameBoard">
                    <GameBoard />
                </div>
            </Content>
        </Container>
    );
}

export default Game;
