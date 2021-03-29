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

    useEffect(() => {
        handleEvent('ROUND_STARTED', (e: any) => {
            setRound({ answers: e.value.roundAnswers, question: e.value.roundQuestion, id: e.value.roundId });
            setValidAnswer(null);
        });
        handleEvent('ROUND_ENDED', (e: any) => {
            setValidAnswer(e.value.validAnswer);
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
                                    style={(key === validAnswer && 'outlined') || 'fillBlue'}
                                    onClick={() => handleAnswer(key)}
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
