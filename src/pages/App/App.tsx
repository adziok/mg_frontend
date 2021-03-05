import React, { useEffect, useState } from "react";

import { createGuest, getCurrentRoom, getRoomList, createRoom, joinRoom, leftRoom, startGame, subscribeSocketIOEvents } from "./actions";
import "./App.css";
import Rooms from "../Rooms/Rooms"

function App() {
    const [playerId, setPlayerId] = useState<string>();
    const [roomId, setRoomId] = useState<string>();
    const [showRooms, setShowRooms] = useState<boolean>();
    const [roomList, setRoomList] = useState<any[]>([]);

    useEffect(() => {
        const lsPlayerId = localStorage.getItem('playerId');
        
        if (lsPlayerId) {
            setPlayerId(lsPlayerId);
            getCurrentRoom(lsPlayerId)
                .then(({ data }) => {
                    setShowRooms(false)
                    setRoomId(data._id);
                    console.log(lsPlayerId!, data._id!);
                    subscribeSocketIOEvents(lsPlayerId!, data._id!)({})
                    // redirect to room
                })
                .catch(() => {
                    setShowRooms(true);
                    getRoomList()
                    .then(({ data: list }) => setRoomList(list))
                })
        } else {
            createGuest('user' + Date.now(), 'https://i.pinimg.com/564x/c8/c1/8e/c8c18ed9738364e33ab4710e52905652.jpg')
                .then(({ data: aPlayerId }) => {
                    setPlayerId(aPlayerId);
                    localStorage.setItem('playerId', aPlayerId);
                });
        }

    }, [])

    const createNewRoom = () => createRoom(playerId!)//.then(d => subscribeSocketIOEvents(playerId!, roomId!)({}));;
    const joinNewRoom = (roomId: string) => () => joinRoom(playerId!, roomId)//.then(d => subscribeSocketIOEvents(playerId!, roomId)({}));
    const leftNewRoom = () => leftRoom(playerId!);
    const startNewGame = (roomId: string) => () => startGame(playerId!, roomId);

    if (playerId === '604278f831170af38572ad06x') {
        return (
            <Rooms />
        )
    }
    
    return (

        <div className="App">
            {
                !!showRooms && <>
                    <h1>Room list</h1>
                    <div>
                        {
                            roomList.map((room) => 
                                <div key={room._id}>
                                    {room._id}
                                    <button onClick={joinNewRoom(room._id)}>join room</button>
                                </div>)
                        }
                    </div>
                    <button onClick={createNewRoom}>create room</button>
                </> || <>
                    JESTEM W POKOJU
                    <div>
                        <button onClick={leftNewRoom}>left room</button>
                        <button onClick={startNewGame(roomId!)}>start game</button>
                    </div>
                </>
            }
        </div>
    );
}

export default App;
