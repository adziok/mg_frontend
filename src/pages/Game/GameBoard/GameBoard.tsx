import React, { useContext, useEffect, useState } from 'react';
import './GameBoard.scss';
import { BaseButton } from 'components/Buttons';
import GameTimer from './GameTimer/GameTimer';
import { WSContext } from 'core/WebSockets/WebSocketsProvider';

function GameBoardGuess() {
    const { handleEvent, emitEvent } = useContext(WSContext);
    const [question, setQuestion] = useState<any>({});
    const [validAnswer, setValidAnswer] = useState<number | null>(null);

    useEffect(() => {
        handleEvent('ROUND_STARTED', (e: any) => {
            setQuestion({ answers: e.value.roundAnswers, question: e.value.roundQuestion });
            setValidAnswer(null);
        });
        handleEvent('ROUND_ENDED', (e: any) => {
            setValidAnswer(e.value.validAnswer);
        });
    }, []);

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
            {/* {qestions.map((question, key) => {
                return ( */}
            {question && (
                <div className="game-guess">
                    <div className="game-guess__title">{question.question}</div>
                    <div className="game-guess__answers">
                        {question?.answers?.map((answer: any, key: number) => {
                            return (
                                <BaseButton
                                    key={key}
                                    text={answer}
                                    style={(key === validAnswer && 'outlined') || 'fillBlue'}
                                    // onClick={() => setAnswerClicked(true)}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            {/* );
            })} */}
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
