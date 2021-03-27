import React, { useState } from 'react';
import './PlayersList.scss';
import { Close } from '@material-ui/icons';

function PlayersList() {
    const [playersList, setPlayersList] = useState([
        {
            name: 'Wojtyła',
        },
        {
            name: 'Małe dziewczynki',
        },
        {
            name: 'Adziok69',
        },
    ]);

    const handleKickPlayer = (player: any) => {
        console.log(`${player.name} kicked`);
        const newList = playersList.filter((item) => {
            return item.name !== player.name;
        });
        console.log(newList);
        setPlayersList(newList);
    };
    return (
        <div className="players-list">
            <header className="players-list__header">Players list:</header>
            <div className="players-list__list">
                {playersList.map((player, i) => (
                    <div className="players-list__element" key={i}>
                        <div className="players-list__element--index"> {i} </div>
                        <div className="players-list__element--name"> {player.name} </div>
                        <div className="players-list__element--points">
                            {
                                <Close
                                    onClick={() => {
                                        handleKickPlayer(player);
                                    }}
                                />
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayersList;
