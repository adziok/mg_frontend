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

export const leftRoom = () => {
    return axios.post(
        BASE_URL + '/room/left',
        {},
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
            withCredentials: true,
        }
    );
};

export const startGame = (roomId: string) => {
    return axios.post(
        BASE_URL + '/game',
        {
            roomId,
        },
        {
            withCredentials: false,
        }
    );
};
