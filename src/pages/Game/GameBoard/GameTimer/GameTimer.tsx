import React, { useEffect, useState } from 'react';
import './GameTimer.scss';

function GameTimer() {
    const [time, setTime] = useState<number>(12);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);
    }, []);
    time > 0 &&
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);

    return (
        <div className="game-timer">
            <div className="game-timer__clock--timer">00:{(time >= 10 && time) || '0' + time}</div>
            <div className="game-timer__clock" style={{ transform: `rotate(${(time || 0) * 6}deg)` }}>
                <div className="game-timer__clock--pointer" />
            </div>
        </div>
    );
}

export default GameTimer;
