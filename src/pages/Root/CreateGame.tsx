import React from 'react';

import { InputBase } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import Container from 'components/Container/Container';
import { TopMenuButton } from 'components/Buttons';
import '../Root/CreateGame.scss';

function CreateGame() {
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
            <TopMenuButton
                // className="createButton"
                // onClick={() => {
                //     setCreateState(false);
                //     userRoomArr.push(newRoomName);
                // }}
                text="Create"
            />
            <TopMenuButton
                // className="createButton"
                // onClick={() => {
                //     setCreateState(false);
                //     userRoomArr.push(newRoomName);
                // }}
                text="Cancel"
            />
            {/* <Add />
                Create!
            </TopMenuButton> */}
        </div>
    );
}

export default CreateGame;
