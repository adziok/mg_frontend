import React, { useEffect, useReducer, useState } from 'react';
import './Room.scss';
import { useParams } from 'react-router';
import Container from 'components/Container/Container';
import { useRoomController } from './RoomController';
import Header from 'components/Header/Header';
import { BaseButton } from 'components/Buttons';
import Content from 'components/Content/Content';

function Room() {
    const params = useParams<{ id: string }>();
    const [room, { joinRoom, reloadRoom }] = useRoomController();

    useEffect(() => {
        if (params?.id) {
            joinRoom(params?.id);
        }
    }, [params?.id]);

    return (
        <Container>
            <Header>
                <div className="headerMenu">
                    <BaseButton text="Leave room" additionalClass="headerMenu__item" />
                    <BaseButton text="About Us" additionalClass="headerMenu__item" />
                </div>
            </Header>
            <Content>
                <header>
                    <h1>Guess {room.error}</h1>
                </header>
                <nav>
                    <div className="scoreboard"></div>
                    <div className="options">
                        <button className="leave">Leave room</button>
                    </div>
                </nav>
                <main>
                    <div className="headText"></div>
                    <div className="countdownBar"></div>
                    <div className="answers">
                        <div className="answer"></div>
                        <div className="answer"></div>
                        <div className="answer"></div>
                        <div className="answer"></div>
                    </div>
                </main>
            </Content>
        </Container>
    );
}

export default Room;
