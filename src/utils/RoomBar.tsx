import React from 'react';
import './RoomBar.scss';
interface RoomInfo {
    name: string;
    players: string;
    tags?: string[];
}
export default function Bar(props: RoomInfo) {
    return (
        <div className="room">
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
        </div>
    );
}
