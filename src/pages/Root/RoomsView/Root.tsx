import React, { useEffect, useContext, useReducer } from 'react';
import './Root.scss';
import { useState } from 'react';

import { FormGroup, Checkbox, FormControlLabel, Switch, InputBase } from '@material-ui/core';
import { Favorite, FavoriteBorder, Search, Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { styles } from './style';

import RoomBar from 'pages/Root/RoomsView/RoomBar/RoomBar';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Content from 'components/Content/Content';
import CreateGame from 'pages/Root/CreateGame/CreateGame';
import BaseButton from 'components/Buttons/BaseButton';

import { CreateGameContext } from 'pages/Root/CreateGameContext';
import { getRoomList } from '../../../utils/actions';

const useStyles = styles;

const useRooms = (initialState = []) => {
    const [afterFirstLoad, fstLoad] = useState(false);
    const [rooms, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'loadRooms':
                return action.payload || [];
            default:
                throw new Error();
        }
    }, initialState);

    const reloadRooms = (): void => {
        getRoomList().then(({ data }) => dispatch({ type: 'loadRooms', payload: data }));
    };

    !afterFirstLoad && (reloadRooms(), fstLoad(true));

    return [rooms, reloadRooms] as [
        {
            _id: string;
            players: number;
            name: string;
            settings: any;
            tags: [];
            questionSources: any;
            status: string;
        }[],
        any
    ];
};

const genresArray = ['Pop', 'Rock', 'Jazz', 'Metal', 'Country', 'Russian'];
const roomCreator = () => {
    return {
        name: 'room' + Math.floor(Math.random() * 100000) + 1000,
        players: Math.floor(Math.random() * 11) + '/10',
        tags: [
            genresArray[(Math.random() * genresArray.length) | 0],
            genresArray[(Math.random() * genresArray.length) | 0],
            genresArray[(Math.random() * genresArray.length) | 0],
        ],
    };
};

const generateTenRooms = () => {
    return [...new Array(17)].map((value, key) => {
        const newRoom = roomCreator();
        return <RoomBar key={key} name={newRoom.name} players={newRoom.players} tags={newRoom.tags} />;
    });
};

const roomsArr = generateTenRooms();

function Root() {
    const { isBeingCreated, setIsBeingCreated } = useContext(CreateGameContext);

    const genres = {
        checkedPop: false,
        checkedRock: false,
        checkedCountry: false,
        checkedMetal: false,
        checkedJazz: false,
        checkedRussian: false,
    };

    const [userRoomArr, setUserRoomArr] = useState<string[]>([]);

    const [state, setState] = useState<Record<string, any>>(genres);
    const [filter, setFilter] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [newRoomName, setNewRoomName] = useState<string>('');
    const [createState, setCreateState] = useState<boolean>(false);
    const classes = useStyles();

    //testing
    const [rooms, loadRooms] = useRooms();

    //>testing

    return (
        <Container classNames="rooms">
            <Header>
                <div className="headerMenu">
                    <BaseButton text="Play" additionalClass="headerMenu__item" />
                    <BaseButton text="Login" additionalClass="headerMenu__item" />
                    <BaseButton text="About Us" additionalClass="headerMenu__item" />
                </div>
            </Header>

            <Content>
                <section className="sideBar">
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            className="searchBar"
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onChange={(event) => {
                                setSearch(event.target.value);
                            }}
                        />
                    </div>
                    <div className="genres">
                        <FormGroup>
                            {Object.keys(state).map((name: any, key) => {
                                return (
                                    <FormControlLabel
                                        key={key}
                                        control={
                                            <Checkbox
                                                icon={<FavoriteBorder />}
                                                checkedIcon={<Favorite />}
                                                checked={state[name]}
                                                onClick={() => {
                                                    setState({ ...state, [name]: !state[name] });
                                                }}
                                                name={name}
                                            />
                                        }
                                        label={name.slice(7, name.length)}
                                    />
                                );
                            })}
                        </FormGroup>
                    </div>
                    <div className="bottomOptions">
                        <div className="createRoom">
                            {/* <Link to="/game" className="createButton">
                                <Add />
                                Create room
                            </Link> */}
                            <BaseButton
                                icon={<Add />}
                                text="Create room"
                                additionalClass="createButton"
                                onClick={() => setIsBeingCreated(true)}
                            />
                            {/* </BaseButton> */}
                        </div>

                        <div className="showFullSwitch">
                            <label className="hideFullLabel">Hide full</label>
                            <Switch
                                className="hideFull"
                                size="small"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                onChange={() => {
                                    setFilter(!filter);
                                }}
                            />
                        </div>
                    </div>
                </section>
                {!isBeingCreated ? (
                    <main className="mainRooms">
                        <div className="mainContent">
                            <div className="labelBar">
                                <label>Room ID</label>
                                <label>Players</label>
                                <label>Tags</label>
                            </div>
                            <div className="roomList">
                                {/* {filter
                                    ? roomsArr.filter((record) => {
                                          return (
                                              record.props.players.slice(0, 2) != 10 &&
                                              (search.length === 0 || record.props.name.includes(search))
                                          );
                                      })
                                    : roomsArr.filter((record) => {
                                          return search.length === 0 || record.props.name.includes(search);
                                      })} */}
                                {rooms.map((room, key) => {
                                    return (
                                        <RoomBar
                                            key={room._id}
                                            name={room.name}
                                            players={room.players + '/10'}
                                            tags={['Rock']}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </main>
                ) : (
                    <main className="mainRooms">
                        <CreateGame shouldShow={createState} />
                    </main>
                )}
            </Content>
        </Container>
    );
}

export default Root;
