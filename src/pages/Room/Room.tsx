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
import { Add, Visibility, Close } from '@material-ui/icons';

function Room() {
    const params = useParams<{ id: string; join: string }>();
    const [room, { joinRoom, reloadRoom, leaveRoom, startNewGame }] = useRoomController();

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
                    <BaseButton text="Leave room" style="fillRed" onClick={leaveRoom} />
                    <BaseButton text="Invite friends" style="fillBlue" />
                    <BaseButton text="Start game" onClick={startNewGame} />
                </div>
            </Header>

            <Content>
                <div className="lobby">
                    <PlayersList players={room.room?.players} />
                </div>
                <div className="configuration">
                    <CreateRoomConfig />
                    <div className="notifications">
                        <div className="notification">
                            <span>Wojtyła wants to add his own playlist to the mix!</span>
                            <BaseButton
                                size="small"
                                icon={<Visibility key="previewIcon" fontSize="inherit" />}
                                text="Preview"
                            />
                            <BaseButton size="small" icon={<Close key="closeIcon" fontSize="inherit" />} text="Naaah" />
                            <BaseButton size="small" icon={<Add key="addIcon" fontSize="inherit" />} text="Add!" />
                        </div>
                    </div>
                </div>
            </Content>
        </Container>
    );
}

export default Room;
