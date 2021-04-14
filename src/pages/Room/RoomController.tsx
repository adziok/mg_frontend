import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { joinRoom, getCurrentRoom, leftRoom, startGame } from '../../utils/actions';
import { WSContext } from 'core/WebSockets/WebSocketsProvider';

type LoadRoom = {
	room: {
		_id: string;
		players: any[];
		playersNumber: number;
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

	const joinWsRoom = (id: string) => {
		handleEvent('GAME_STARTED', (e) => {
			history.push('/game');
		});
		emitEvent('JOIN_ROOM', { roomId: id });
	};

	const reloadRoomAction = (): void => {
		dispatch({ type: 'loadRoomInit' });
		getCurrentRoom()
			.then(({ data }) => (dispatch({ type: 'loadRoomSuccess', payload: data }), joinWsRoom(data?._id!)))
			.catch(({ data }) => dispatch({ type: 'loadRoomFailure', payload: data }));
	};

	const joinRoomAction = (id: string): void => {
		joinRoom(id)
			.then(() => reloadRoomAction())
			.catch(({ data }) => dispatch({ type: 'loadRoomFailure', payload: data }));
	};

	const leaveRoom = () => {
		leftRoom().finally(() => history.push('/'));
	};

	const startNewGame = () => {
		startGame(room.room?._id!);
	};

	return [
		room,
		{
			reloadRoom: reloadRoomAction,
			joinRoom: joinRoomAction,
			leaveRoom,
			startNewGame,
		},
	] as [LoadRoom, any];
};
