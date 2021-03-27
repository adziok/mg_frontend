import React, { useContext, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { joinRoom, getCurrentRoom } from '../../utils/actions';
import { WSContext } from 'core/WebSockets/WebSocketsProvider';

type LoadRoom = {
    room: {
        _id: string;
        players: number;
        name: string;
        settings: any;
        tags: [];
        questionSources: any;
        status: string;
    } | null;
    loading: boolean;
    error?: string | null;
};

const LoadRoomResult = {
    success: (data: any): LoadRoom => ({ room: data, error: null, loading: false }),
    failure: (data: any): LoadRoom => ({ room: null, error: data, loading: false }),
    loading: (): LoadRoom => ({ room: null, error: null, loading: true }),
};

const loadRoomInitial: LoadRoom = { room: null, loading: true, error: null };

export const useRoomController = () => {
    const history = useHistory();
    const { handleEvent, emitEvent } = useContext(WSContext);
    const [room, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'loadRoomInit':
                return LoadRoomResult.loading();
            case 'loadRoomSuccess':
                return LoadRoomResult.success(action.payload);
            case 'loadRoomFailure':
                return LoadRoomResult.failure(action.payload);
            default:
                throw new Error();
        }
    }, loadRoomInitial);

    const reloadRoomAction = (): void => {
        dispatch({ type: 'loadRoomInit' });
        getCurrentRoom()
            .then(({ data }) => dispatch({ type: 'loadRoomSuccess', payload: data }))
            .catch(({ data }) => dispatch({ type: 'loadRoomFailure', payload: data }));
    };

    const joinRoomAction = (id: string): void => {
        joinRoom(id)
            .then(
                () => (
                    reloadRoomAction(),
                    emitEvent('JOIN_ROOM', { roomId: id }),
                    handleEvent('GAME_STARTED', (e) => {
                        history.push('/game');
                    })
                )
            )
            .catch(({ data }) => dispatch({ type: 'loadRoomFailure', payload: data }));
    };

    return [
        room,
        {
            reloadRoom: reloadRoomAction,
            joinRoom: joinRoomAction,
        },
    ] as [LoadRoom, any];
};
