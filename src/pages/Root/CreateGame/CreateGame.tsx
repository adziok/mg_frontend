import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InputBase, Slider, Typography, Switch } from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';

import Container from 'components/Container/Container';
import { BaseButton } from 'components/Buttons';
import './CreateGame.scss';
import { createRoom } from 'utils/actions';

import { time, players, songs } from './labels';
import { CreateGameContext } from 'pages/Root/CreateGameContext';

function CreateGame(props: any) {
    const history = useHistory();
    const { isBeingCreated, setIsBeingCreated } = useContext(CreateGameContext);

    const [name, setName] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [maxNumOfPlayers, setMaxNumOfPlayers] = useState<any>(5);
    const [timePerRound, setTimePerRound] = useState<any>(15);
    const [songsToGuess, setSongsToGuess] = useState<any>(15);

    const createNewRoom = () => {
        createRoom().then(() => window.location.reload());
    };

    const createRoomObj = () => {
        return {
            roomName: name,
            roomPass: pass,
            maxNumOfPlayers: maxNumOfPlayers,
            timePerRound: timePerRound,
            songsToGuess: songsToGuess,
        };
    };

    const [isPublic, setIsPublic] = useState<boolean>(false);

    return (
        <div className="createGameContent">
            <div className="roomPrivacy">
                <div className="roomName">
                    <p>Room&#39;s name:</p>
                    <InputBase
                        className="searchBar"
                        placeholder="name"
                        // inputProps={{ 'aria-label': 'search' }}
                        style={{ color: '#fff' }}
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>
                <div className="roomPublic">
                    <p>Set room to public:</p>
                    <Switch
                        onChange={(e) => {
                            setIsPublic(e.target.checked);
                        }}
                    />
                </div>
                {isPublic ? (
                    ''
                ) : (
                    <div className="roomPassword">
                        <p>Password:</p>
                        <InputBase
                            className="searchBar"
                            placeholder="password"
                            // inputProps={{ 'aria-label': 'search' }}
                            style={{ color: '#fff' }}
                            type="password"
                            value={pass}
                            onChange={(event) => {
                                setPass(event.target.value);
                            }}
                        />
                    </div>
                )}
            </div>
            <p>Max number of players:</p>
            <Slider
                defaultValue={5}
                min={2}
                max={10}
                step={null}
                marks={players}
                style={{ width: '50%', marginLeft: '5px' }}
                value={maxNumOfPlayers}
                onChange={(event, value) => setMaxNumOfPlayers(value)}
            />
            <p>Time per round &#40;in seconds&#41;:</p>
            <Slider
                defaultValue={15}
                min={10}
                max={30}
                step={null}
                marks={time}
                style={{ width: '50%', marginLeft: '5px' }}
                value={timePerRound}
                onChange={(event, value) => setTimePerRound(value)}
            />
            <p>Songs to guess:</p>
            <Slider
                defaultValue={15}
                min={10}
                max={30}
                step={null}
                marks={songs}
                style={{ width: '50%', marginLeft: '5px' }}
                value={songsToGuess}
                onChange={(event, value) => setSongsToGuess(value)}
            />
            <div className="buttons">
                <BaseButton
                    icon={<Add />}
                    // additionalClass="createButton"
                    style="fillBlue"
                    onClick={() => {
                        createNewRoom();
                        console.log(createRoomObj());
                    }}
                    text="Create"
                />
                <BaseButton
                    icon={<Close />}
                    style="fillRed"
                    // additionalClass="cancelButton"
                    // className="createButton"
                    onClick={() => setIsBeingCreated(false)}
                    text="Cancel"
                />
            </div>
        </div>
    );
}

export default CreateGame;
