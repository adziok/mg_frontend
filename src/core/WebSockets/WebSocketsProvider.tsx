import React, { createContext, useEffect, useState } from 'react';
import { io, ManagerOptions, SocketOptions, Socket } from 'socket.io-client';

type IWebSocketContext = {
    socketClient?: Socket;
    handleEvent: (eventName: string, callback: (...args: any[]) => void) => void;
    emitEvent: (eventName: string, payload: any) => void;
};

const initialState = {} as IWebSocketContext;
const WSContext = createContext<IWebSocketContext>(initialState);
const { Provider } = WSContext;

type SocketSettings = {
    socketOptions: Partial<ManagerOptions & SocketOptions>;
    url: string;
};

type WebSocketsProviderProps = {
    settings: SocketSettings;
    children?: any;
};

const WebSocketsProvider = ({ children, settings }: WebSocketsProviderProps) => {
    const [socketClient, setSocketClient] = useState<Socket>();
    const [listeners, setListeners] = useState<any[]>();

    useEffect(() => {
        settings && createConnection(settings);
    }, [settings]);

    const createConnection = (settings: SocketSettings) => {
        const ioClient = io(settings.url, settings.socketOptions);
        setSocketClient(ioClient);
    };

    const handleEvent = (eventName: string, callback: (...args: any[]) => void) => {
        const listener = socketClient?.on(eventName, callback);
        setListeners([...listeners!, listener]);
    };

    const emitEvent = (eventName: string, payload: any) => {
        socketClient?.emit(eventName, payload);
    };

    return <Provider value={{ socketClient, handleEvent, emitEvent }}>{children}</Provider>;
};

export type WebSocketContext = IWebSocketContext;
export { WSContext, WebSocketsProvider };
