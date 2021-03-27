import React from 'react';
import './Scoreboard.scss';

import { Star } from '@material-ui/icons';

import Container from 'components/Container/Container';

const playersList = [
    {
        name: 'Wojtyła',
        points: 2137,
    },
    {
        name: 'Małe dziewczynki',
        points: 444,
    },
    {
        name: 'Adziok69',
        points: 420,
    },
    {
        name: 'Martyna',
        points: 321,
    },
    {
        name: 'Siusiakim',
        points: 111,
    },
    {
        name: 'TwardyKrystian',
        points: 18,
    },
    {
        name: 'MiękkiKrystian',
        points: 8,
    },
    {
        name: 'Triangle720',
        points: 1,
    },
    {
        name: 'Wuł',
        points: 0,
    },
    {
        name: 'Stalin',
        points: 0,
    },
];

// enum starsEnum {
//     a = "{<Star style={{color: 'orange'}} />}",
//     b = "{<Star style={{color: 'grey'}} />}",
//     c = "{<Star style={{color: 'brown'}} />}",
// }
const starsEnum = [
    <Star key={'1st'} style={{ color: 'Gold', fontSize: '20px' }} />,
    <Star key={'2nd'} style={{ color: 'Silver', fontSize: '20px' }} />,
    <Star key={'3rd'} style={{ color: 'SaddleBrown', fontSize: '20px' }} />,
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
