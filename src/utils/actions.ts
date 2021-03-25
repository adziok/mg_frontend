import axios from 'axios';
import { io } from 'socket.io-client';
import { getConfig } from '../configs';

const config = getConfig();
export const BASE_URL = config.baseUrl;

export const createRoom = (creatorId: string) => {
    return axios.post(
        BASE_URL + '/room',
        {
            creatorId,
        },
        {
            withCredentials: false,
        }
    );
};

export const joinRoom = (playerId: string, roomId: string) => {
    return axios.post(
        BASE_URL + '/room/join',
        {
            playerId,
            roomId,
        },
        {
            withCredentials: false,
        }
    );
};

export const leftRoom = (playerId: string) => {
    return axios.post(
        BASE_URL + '/room/left',
        {
            playerId,
        },
        {
            withCredentials: false,
        }
    );
};

export const getCurrentRoom = (playerId: string) => {
    return axios.get(BASE_URL + '/room/me', {
        params: {
            playerId,
        },
        withCredentials: false,
    });
};

export const getRoomList = () => {
    return axios.get(BASE_URL + '/room', {
        withCredentials: false,
    });
};

export const createGuest = (nick: string, image: string) => {
    return axios.post(BASE_URL + '/player', {
        nick,
        image,
    });
};

export const startGame = (playerId: string, roomId: string) => {
    return axios.post(BASE_URL + '/game', {
        playerId,
        roomId,
    });
};
