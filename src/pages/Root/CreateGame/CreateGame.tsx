import React, { useContext } from 'react';

import { InputBase, Slider, Typography } from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';

import Container from 'components/Container/Container';
import { BaseButton } from 'components/Buttons';
import './CreateGame.scss';

import { time, players, songs } from './labels';
import { CreateGameContext } from 'pages/Root/CreateGameContext';

function CreateGame(props: any) {
    const { isBeingCreated, setIsBeingCreated } = useContext(CreateGameContext);

    return (
        <div className="createGameContent">
            <p>Room&#39;s name:</p>
            <InputBase
                className="searchBar"
                placeholder="name"
                inputProps={{ 'aria-label': 'search' }}
                style={{ color: '#fff' }}
                // onChange={(event) => {
                //     setNewRoomName(event.target.value);
                // }}
            />
            <p>Password:</p>
            <InputBase
                className="searchBar"
                placeholder="password"
                inputProps={{ 'aria-label': 'search' }}
                style={{ color: '#fff' }}
                type="password"
                // value={search}
                // onChange={(event) => {
                //     setSearch(event.target.value);
                // }}
            />
            <p>Max number of players:</p>
            <Slider
                defaultValue={5}
                min={2}
                max={10}
                step={null}
                marks={players}
                style={{ width: '50%', marginLeft: '5px' }}
            />
            <p>Time per round &#40;in seconds&#41;:</p>
            <Slider
                defaultValue={0}
                min={0}
                max={4}
                step={null}
                marks={time}
                style={{ width: '50%', marginLeft: '5px' }}
            />
            <p>Songs to guess:</p>
            <Slider
                defaultValue={1}
                min={0}
                max={4}
                step={null}
                marks={songs}
                style={{ width: '50%', marginLeft: '5px' }}
            />
            <div className="buttons">
                <BaseButton
                    icon={<Add />}
                    additionalClass="createButton"
                    // onClick={() => {
                    //     setCreateState(false);
                    //     userRoomArr.push(newRoomName);
                    // }}
                    text="Create"
                />
                <BaseButton
                    icon={<Close />}
                    additionalClass="cancelButton"
                    // className="createButton"
                    onClick={() => setIsBeingCreated(false)}
                    text="Cancel"
                />
            </div>
        </div>
    );
}

export default CreateGame;
