import React, { useEffect, useReducer, useState } from 'react';
import './Room.scss';
import { useParams } from 'react-router';
import Container from 'components/Container/Container';
import { useRoomController } from './RoomController';
import Header from 'components/Header/Header';
import { BaseButton } from 'components/Buttons';
import Content from 'components/Content/Content';
import PlayersList from 'pages/Room/CreateRoom/PlayersList/PlayersList';
import { Link } from 'react-router-dom';
import CreateRoomConfig from './CreateRoom/CreateRoomConfig';

function Room() {
    const params = useParams<{ id: string; join: string }>();
    const [room, { joinRoom, reloadRoom }] = useRoomController();

    useEffect(() => {
        if (params?.id && params?.join) {
            joinRoom(params?.id);
        }
        if (params?.id) {
            reloadRoom();
        }
    }, [params?.id]);

    return (
        <Container classNames="room">
            <Header>
                <div className="headerMenu">
                    <Link to="/" className="headerMenu__leaveButton">
                        {<BaseButton text="Leave game" style="fillRed" />}
                    </Link>
                    <BaseButton text="Invite friends" style="fillBlue" />
                    <BaseButton text="About us" />
                </div>
            </Header>

            <Content>
                <div className="lobby">
                    <PlayersList />
                </div>
                <div className="configuration">
                    <CreateRoomConfig />
                </div>
            </Content>
        </Container>
    );
}

export default Room;
