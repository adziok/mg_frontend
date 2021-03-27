import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography, Box } from '@material-ui/core';
import './GameTimer.scss';

type GameTimerDisplay = {
    time: number;
};

type GameTimer = {
    roundTime: number;
    value: number;
};

function GameTimerDisplay(props: any) {
    // const [time, setTime] = useState<number>(12);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setTime(time - 1);
    //     }, 1000);
    // }, []);
    // time > 0 &&
    //     setTimeout(() => {
    //         setTime(time - 1);
    //     }, 1000);
    const actualTime = props.value / (100 / props.time);
    return (
        <div className="game-timer">
            <Box position="relative" display="inline-flex">
                {actualTime > 5 ? (
                    <CircularProgress size="120px" thickness={5} variant="determinate" {...props} />
                ) : (
                    <CircularProgress
                        size="120px"
                        thickness={5}
                        variant="determinate"
                        style={{ color: 'red' }}
                        {...props}
                    />
                )}
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography className="timerText" variant="caption" component="div" color="textSecondary">
                        {actualTime}
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}

// export default GameTimer;

// <div className="game-timer__clock--timer">00:{(time >= 10 && time) || '0' + time}</div>
// <div className="game-timer__clock" style={{ transform: `rotate(${(time || 0) * 6}deg)` }}>
//     <div className="game-timer__clock--pointer" />
// </div>
// </div>

export default function GameTimer({ time: roundTime }: GameTimerDisplay) {
    const roundTimeToFull = 100 / roundTime;
    const [progress, setProgress] = React.useState(roundTime * roundTimeToFull);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress <= 0 ? roundTime * roundTimeToFull : prevProgress - roundTimeToFull
            );
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <GameTimerDisplay value={progress} time={roundTime} />;
}
