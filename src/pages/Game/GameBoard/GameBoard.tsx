import React, { useContext, useEffect, useState } from 'react';
import './GameBoard.scss';
import { BaseButton } from 'components/Buttons';
import GameTimer from './GameTimer/GameTimer';
import { WSContext } from 'core/WebSockets/WebSocketsProvider';
import { makeGuess } from '../../../utils/actions';

function GameBoardGuess() {
    const { handleEvent, emitEvent } = useContext(WSContext);
    const [round, setRound] = useState<any>({});
    const [validAnswer, setValidAnswer] = useState<number | null>(null);
    const [roundCount, setRoundCount] = useState<number>(0);

    useEffect(() => {
        handleEvent('ROUND_STARTED', (e: any) => {
            setRound({ answers: e.value.roundAnswers, question: e.value.roundQuestion, id: e.value.roundId });
            setValidAnswer(null);
            setRoundCount(roundCount + 1);
        });
        handleEvent('ROUND_ENDED', (e: any) => {
            setValidAnswer(e.value.validAnswer);
        });
        handleEvent('GAME_ENDED', () => {
            window.location.reload();
        });
    }, []);

    const handleAnswer = (index: number) => {
        makeGuess(round.id, index);
    };
    const [answerClicked, setAnswerClicked] = useState<boolean>(false);

    return (
        <div>
            {/* {qestions.map((question, key) => {
                return ( */}
            {round && (
                <div className="game-guess">
                    <div className="game-guess__title">{round.question}</div>
                    <div className="game-guess__answers">
                        {round?.answers?.map((answer: any, key: number) => {
                            return (
                                <BaseButton
                                    key={key}
                                    text={answer}
                                    style={(key === validAnswer && 'fillBlue') || 'outlined'}
                                    onClick={() => handleAnswer(key)}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            <span className="game-board__round__roundIndicator">{round ? `Round ${roundCount}/10` : ''}</span>
        </div>
    );
}

function GameBoard() {
    return (
        <div className="game-board">
            <div className="game-board__guess">
                <GameBoardGuess />
            </div>
            <div className="game-board__round">{true ? <GameTimer time={20} /> : ''}</div>
        </div>
    );
}

export default GameBoard;
