import React, { useMemo, useReducer, useContext } from 'react';
import { useHistory } from 'react-router';
import { getConfig } from '../../configs';
import { WSContext } from '../../core/WebSockets/WebSocketsProvider';
import { joinRoom, getCurrentRoom, createGuest } from '../../utils/actions';

export const useCoreController = () => {
    const { handleEvent, emitEvent } = useContext(WSContext);

    // const history = useHistory();
    // const [state, dispatch] = useReducer((state: any, action: any) => {
    //     switch (action.type) {
    //         case 'RoundStarted':
    //             return LoadRoomResult.loading();
    //         case 'loadRoomSuccess':
    //             return LoadRoomResult.success(action.payload), history.push('/room/' + action.payload?._id);
    //         case 'loadRoomFailure':
    //             return LoadRoomResult.failure(action.payload);
    //         default:
    //             throw new Error();
    //     }
    // }, {});
    handleEvent('GameStarted', () => {});

    return [{}, {}];
};
