import React from "react"
import './Root.scss';
// import { useState } from 'react';

import RoomBar from '../../utils/RoomBar';

import { Checkbox, Input } from 'antd';

function Root() {
    let taggesy = ['jebac', 'disa'];
    return (
        <div className="wrapper">
            <div className="container">
                <header>
                    <div className="logo"></div>
                    <div className="headerMenu">
                        <button className="headerMenu__item play">Play</button>
                        <button className="headerMenu__item login">Login</button>
                        <button className="headerMenu__item about">About Us</button>
                    </div>
                </header>

                <section>
                    <Input placeholder="Room's name" />
                    <div className="genres">
                        <Checkbox>Pop</Checkbox>
                        <Checkbox>Rock</Checkbox>
                        <Checkbox>Country</Checkbox>
                        <Checkbox>HipHop</Checkbox>
                    </div>
                </section>

                <main>
                    <div className="labelBar">
                        <label>Room ID</label>
                        <label>Players</label>
                        <label>Tags</label>
                    </div>
                    <div className="roomList">
                        <RoomBar name="room1534354131544" players="3/5" tags={taggesy} />
                        <RoomBar name="room1115541315d5" players="5/5" />
                        <RoomBar name="pszemkapokuj_hehe" players="4/5" />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Root;
