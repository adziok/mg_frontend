import React from 'react';
import './GameBoard.scss';
import { BaseButton } from 'components/Buttons';

function GameBoardGuess() {
    return (
        <div className="game-guess">
            <div className="game-guess__title">Co to chleb Pana Mariana</div>
            <div className="game-guess__answers">
                <BaseButton text="Dupa" />
                <BaseButton text="Kupa" />
                <BaseButton text="Ziemniaki" />
                <BaseButton text="Droźdzaki" />
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
            <div className="game-board__round"></div>
        </div>
    );
}

export default GameBoard;
