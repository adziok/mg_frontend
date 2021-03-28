import React, { useContext, useEffect, useState } from 'react';
import './GameBoard.scss';
import { BaseButton } from 'components/Buttons';
import GameTimer from './GameTimer/GameTimer';
import { WSContext } from 'core/WebSockets/WebSocketsProvider';

function GameBoardGuess() {
    const { handleEvent, emitEvent } = useContext(WSContext);

    useEffect(() => {
        handleEvent('ROUND_STARTED', () => {
            console.log('round has started');
        });
    }, []);
    const qestions = [
        {
            question: 'Z warkoczykami czy bez warkoczyków?',
            answers: [
                {
                    answer: 'Z warkoczykami',
                    isCorrect: false,
                },
                {
                    answer: 'Bez warkoczyków',
                    isCorrect: false,
                },
                {
                    answer: 'Po co mam wybierać',
                    isCorrect: false,
                },
                {
                    answer: 'Najlepiej zabrać obie',
                    isCorrect: true,
                },
            ],
        },
    ];

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            return 'fillBlue';
        } else {
            return 'fillRed';
        }
    };
    const [answerClicked, setAnswerClicked] = useState<boolean>(false);

    return (
        <div>
            {qestions.map((question, key) => {
                return (
                    <div key={key} className="game-guess">
                        <div className="game-guess__title">{question.question}</div>
                        <div className="game-guess__answers">
                            {question.answers.map((answer, key) => {
                                return (
                                    <BaseButton
                                        key={key}
                                        text={answer.answer}
                                        style={answerClicked ? handleAnswer(answer.isCorrect) : 'outlined'}
                                        onClick={() => setAnswerClicked(true)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
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
