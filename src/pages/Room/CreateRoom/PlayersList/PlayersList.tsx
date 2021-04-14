import React, { useState } from 'react';
import './PlayersList.scss';
import { Close } from '@material-ui/icons';

function PlayersList({ players: playersList }: { players?: any[] }) {
	// const [playersList, setPlayersList] = useState(players);
	// const handleKickPlayer = (player: any) => {
	//     console.log(`${player.name} kicked`);
	//     const newList = playersList.filter((item) => {
	//         return item.name !== player.name;
	//     });
	//     console.log(newList);
	//     setPlayersList(newList);
	// };
	return (
		<div className="players-list">
			<header className="players-list__header">Players list:</header>
			<div className="players-list__list">
				{playersList?.map((player, i) => (
					<div className="players-list__element" key={i}>
						<div className="players-list__element--index"> {i} </div>
						<div className="players-list__element--name"> {player.playerId.value} </div>
						<div className="players-list__element--points">
							{
								<Close
									style={{ cursor: 'pointer' }}
									onClick={() => {
										// handleKickPlayer(player);
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
