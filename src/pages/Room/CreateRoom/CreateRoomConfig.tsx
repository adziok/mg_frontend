import React, { useContext, useState } from 'react';

import { InputBase, Slider, Switch } from '@material-ui/core';

import { BaseButton } from 'components/Buttons';
import './CreateRoomConfig.scss';

import { time, players, songs } from './labels';
import CreateGame from 'pages/Root/CreateGame/CreateGame';

function CreateRoomConfig(props: any) {
	const [name, setName] = useState<string>('');
	const [pass, setPass] = useState<string>('');
	const [maxNumOfPlayers, setMaxNumOfPlayers] = useState<any>(5);
	const [timePerRound, setTimePerRound] = useState<any>(15);
	const [songsToGuess, setSongsToGuess] = useState<any>(15);

	// const createRoomObj = () => {
	//     return {
	//         roomName: name,
	//         roomPass: pass,
	//         maxNumOfPlayers: maxNumOfPlayers,
	//         timePerRound: timePerRound,
	//         songsToGuess: songsToGuess,
	//     };
	// };

	const [showOptions, setShowOptions] = useState(false);

	return (
		<div className="createRoomContent">
			<div className="roomConfigs">
				<div className="showRoomConfigs">
					<p>Show room configuration options:</p>
					<Switch
						onChange={(e) => {
							setShowOptions(e.target.checked);
						}}
					/>
				</div>
			</div>
			<div className="gameConfigs">{showOptions ? <CreateGame /> : ''}</div>
			<div className="otherConfigs">
				<p>Pick music source</p>
			</div>
		</div>
	);
}

export default CreateRoomConfig;
