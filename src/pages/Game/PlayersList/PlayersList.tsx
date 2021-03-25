import React from 'react';
import './PlayersList.scss';

import { Star } from '@material-ui/icons';

import Container from 'components/Container/Container';

const playersList = [
    {
        name: 'Player1',
        points: 1520,
    },
    {
        name: 'Player2',
        points: 455,
    },
    {
        name: 'Adziok69',
        points: 420,
    },
    {
        name: 'KostiHard',
        points: 320,
    },
    {
        name: 'KostiMiekki',
        points: 280,
    },
    {
        name: 'KostiHard2',
        points: 120,
    },
    {
        name: 'PRzemAS',
        points: 20,
    },
];

// enum starsEnum {
//     a = "{<Star style={{color: 'orange'}} />}",
//     b = "{<Star style={{color: 'grey'}} />}",
//     c = "{<Star style={{color: 'brown'}} />}",
// }
const starsEnum = [
    <Star key={'1st'} style={{ color: 'Gold' }} />,
    <Star key={'2nd'} style={{ color: 'Silver' }} />,
    <Star key={'3rd'} style={{ color: 'SaddleBrown' }} />,
];

Object.freeze(starsEnum);

function PlayersList() {
    return (
        <div className="players-list">
            <header className="players-list__header">Players list:</header>
            <div className="players-list__list">
                {playersList.map((player, i) => (
                    <div className="players-list__element" key={i}>
                        <div className="players-list__element--index"> {i < 3 ? starsEnum[i] : ''} </div>
                        <div className="players-list__element--name"> {player.name} </div>
                        <div className="players-list__element--points"> {player.points} </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayersList;
