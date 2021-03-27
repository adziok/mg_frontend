import React from 'react';
import { Link } from 'react-router-dom';
import './RoomBar.scss';
interface RoomInfo {
    id?: string;
    name: string;
    players: string;
    tags?: string[];
}
export default function Bar(props: RoomInfo) {
    const handleClick = () => {
        return <Link to={'/room/' + props.id} />;
    };
    return (
        <Link to={'/room/' + props.id + '/join'} className="room" onClick={handleClick}>
            <div className="name">{props.name}</div>
            <div className="players">{props.players}</div>
            <div className="tags">
                {props?.tags
                    ? props.tags.map((tag, i) => (
                          <div key={i} className="tag">
                              {tag}
                          </div>
                      ))
                    : ''}
            </div>
        </Link>
    );
}
