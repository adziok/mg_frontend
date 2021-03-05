import axios from "axios"
import { io } from "socket.io-client";

export const BASE_URL = 'http://localhost:3000'

export const createRoom = (creatorId: string) => {
    return axios.post(BASE_URL + '/room', {
        creatorId,
    }, {
        withCredentials: false,
    });
};

export const joinRoom = (playerId: string, roomId: string) => {
    return axios.post(BASE_URL + '/room/join', {
        playerId, roomId,
    }, {
        withCredentials: false,
    });
};

export const leftRoom = (playerId: string) => {
    return axios.post(BASE_URL + '/room/left', {
        playerId,
    }, {
        withCredentials: false,
    });
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
        nick, image,
    })
}

export const startGame = (playerId: string, roomId: string) => {
    return axios.post(BASE_URL + '/game', {
        playerId, roomId,
    })
}


export const subscribeSocketIOEvents = (playerId: string, roomId: string) => {
    const ioClient = io('ws://localhost:3000', {
        query: { playerId, roomId },
        forceNew: false,
        transports: ['websocket'],
        upgrade: false,
        reconnection: false,
    });

    return ({ roundStarted, roundEnded }: {
        roundStarted?: any,
        roundEnded?: any,
    }) => {
        ioClient.on('ROUND_STARTED', (v: any) => {
            console.log(v);
            roundStarted && roundStarted(v);
        });
        ioClient.on('ROUND_ENDED', (v: any) => {
            console.log(v);
            roundEnded && roundEnded(v);
        });

        return () => ioClient.disconnect();
    };
};