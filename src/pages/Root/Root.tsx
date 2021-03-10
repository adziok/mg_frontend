import React from 'react';
import './Root.scss';
// import { useState } from 'react';

import RoomBar from '../../utils/RoomBar';

import { Checkbox, Input, Switch, Button } from 'antd';

function Root() {
    const rooms = {
        room1: {
            name: 'room61513515',
            players: '4/8',
            tags: ['Pop', 'Rock'],
        },
    };
    return (
        <div className="wrapper">
            <div className="container">
                <header>
                    <div className="headerContent">
                        <div className="logo"></div>
                        <h1 className="title">Music Guesser</h1>
                        <div className="headerMenu">
                            <button className="headerMenu__item play">Play</button>
                            <button className="headerMenu__item login">Login</button>
                            <button className="headerMenu__item about">About Us</button>
                        </div>
                    </div>
                </header>

                <section>
                    <Input className="searchBar" placeholder="Room's name" />
                    <div className="genres">
                        <Checkbox>Pop</Checkbox>
                        <Checkbox>Rock</Checkbox>
                        <Checkbox>Country</Checkbox>
                        <Checkbox>HipHop</Checkbox>
                    </div>
                    <div className="bottomOptions">
                        <div className="createRoom"></div>

                        <div className="showFullSwitch">
                            <span>Hide full</span>
                            <Switch className="showFull" defaultChecked />
                        </div>
                    </div>
                </section>

                <main>
                    <div className="mainContent">
                        <div className="labelBar">
                            <label>Room ID</label>
                            <label>Players</label>
                            <label>Tags</label>
                        </div>
                        <div className="roomList">
                            <RoomBar name={rooms.room1.name} players={rooms.room1.players} tags={rooms.room1.tags} />
                            <RoomBar name="room1115541315d5" players="5/5" tags={['Pop', 'HipHop', 'Cock']} />
                            <RoomBar name="pszemkapokuj_hehe" players="4/5" tags={['Country', 'Rock', 'Cock']} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Root;
