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

export const joinRoom = (roomId: string) => {
    return axios.post(
        BASE_URL + '/room/join',
        {
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

export const getCurrentRoom = () => {
    return axios.get(BASE_URL + '/room/me', {
        withCredentials: false,
    });
};

export const getRoomList = () => {
    return axios.get(BASE_URL + '/room', {
        withCredentials: false,
    });
};

export const createGuest = (nick: string, image: string) => {
    return axios.post(
        BASE_URL + '/player',
        {
            nick,
            image,
        },
        {
            withCredentials: false,
        }
    );
};

export const startGame = (playerId: string, roomId: string) => {
    return axios.post(
        BASE_URL + '/game',
        {
            playerId,
            roomId,
        },

        {
            withCredentials: false,
        }
    );
};
