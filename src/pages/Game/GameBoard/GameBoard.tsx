import React from 'react';
import './GameBoard.scss';
import { BaseButton } from 'components/Buttons';
import GameTimer from './GameTimer/GameTimer';

function GameBoardGuess() {
    return (
        <div className="game-guess">
            <div className="game-guess__title">Z warkoczykami czy bez warkoczyków?</div>
            <div className="game-guess__answers">
                <BaseButton text="Z warkoczykami" />
                <BaseButton text="Bez warkoczyków" />
                <BaseButton text="Po co mam wybierać" />
                <BaseButton text="Najlepiej zabrać obie" />
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
                <GameTimer time={20} />
                <span className="game-board__round__roundIndicator">Round 2/10</span>
            </div>
        </div>
    );
}

export default GameBoard;
