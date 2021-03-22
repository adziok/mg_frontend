import React from 'react';
import './GameBoard.scss';
import { BaseButton } from 'components/Buttons';
import GameTimer from './GameTimer/GameTimer';

function GameBoardGuess() {
    return (
        <div className="game-guess">
            <div className="game-guess__title">Co to chleb Pana Mariana</div>
            <div className="game-guess__answers">
                <BaseButton style="outlined" text="Dupa" />
                <BaseButton style="outlined" text="Kupa" />
                <BaseButton style="outlined" text="Ziemniaki" />
                <BaseButton style="outlined" text="Droźdzaki" />
            </div>
        </div>
    );
}

function GameBoard() {
    return (
        <div className="game-board">
            <div className="game-board__guess">
                <GameBoardGuess />
            </div>
            <div className="game-board__round">
                <GameTimer />
            </div>
        </div>
    );
}

export default GameBoard;
