import React, { useMemo, useReducer, useState } from 'react';
import { useHistory } from 'react-router';
import { getConfig } from '../configs';
import { joinRoom, getCurrentRoom, createGuest } from '../utils/actions';

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

const config = getConfig();

const createConfig = (playerId: string) => ({
	url: config.baseWs,
	socketOptions: {
		query: { playerId },
		forceNew: true,
		transports: ['websocket'],
		upgrade: false,
		reconnection: true,
	},
});

const initApp = (dispatch: any): any => {
	const lsPlayerId = localStorage.getItem('playerId');

	if (!lsPlayerId) {
		return createGuest(
			'user' + Date.now(),
			'https://i.pinimg.com/564x/c8/c1/8e/c8c18ed9738364e33ab4710e52905652.jpg'
		).then(({ data: aPlayerId }: any) => {
			localStorage.setItem('playerId', aPlayerId);
			dispatch({ type: 'loadRoomFailure', payload: 'No in room' });
			return createConfig(aPlayerId);
		});
	} else {
		getCurrentRoom()
			.then(({ data }) => dispatch({ type: 'loadRoomSuccess', payload: data }))
			.catch(({ data }) => dispatch({ type: 'loadRoomFailure', payload: data }));
		return createConfig(lsPlayerId);
	}
};

export const useCoreController = () => {
	const history = useHistory();
	const [state, dispatch] = useReducer((state: any, action: any) => {
		switch (action.type) {
			case 'loadRoomInit':
				return LoadRoomResult.loading();
			case 'loadRoomSuccess':
				return LoadRoomResult.success(action.payload), history.push('/room/' + action.payload?._id);
			case 'loadRoomFailure':
				return LoadRoomResult.failure(action.payload);
			default:
				throw new Error();
		}
	}, loadRoomInitial);

	return [
		state,
		{
			initApp: () => useMemo(() => initApp(dispatch), []),
		},
	] as [LoadRoom, any];
};
