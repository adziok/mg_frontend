import React from 'react';

import { InputBase, Slider, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import Container from 'components/Container/Container';
import { BaseButton } from 'components/Buttons';
import './CreateGame.scss';

import { time, players, songs } from './labels';

function CreateGame(props: any) {
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
                style={{ width: '50%', marginLeft: '10px' }}
            />
            <p>Time per round:</p>
            <Slider
                defaultValue={0}
                min={0}
                max={4}
                step={null}
                marks={time}
                style={{ width: '50%', marginLeft: '10px' }}
            />
            <p>Songs to guess:</p>
            <Slider
                defaultValue={1}
                min={0}
                max={4}
                step={null}
                marks={songs}
                style={{ width: '50%', marginLeft: '10px' }}
            />
            <div className="buttons">
                <BaseButton
                    // className="createButton"
                    // onClick={() => {
                    //     setCreateState(false);
                    //     userRoomArr.push(newRoomName);
                    // }}
                    text="Create"
                />
                <BaseButton
                    // className="createButton"
                    // onClick={() => {

                    // }}
                    text="Cancel"
                />
            </div>
        </div>
    );
}

export default CreateGame;
