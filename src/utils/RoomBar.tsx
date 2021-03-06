import './RoomBar.css';
interface RoomInfo {
    name: string;
    players: string;
    tags?: string[];
}
export default function Bar(props: RoomInfo) {
    return (
        <div className="room">
            <div>{props.name}</div>
            <div>{props.players}</div>
            <div className="tags">
                {props?.tags ? <div className="tag">{props.tags}</div> : ''}
                <div className="tag">Funk</div>
                <div className="tag">Rock</div>
            </div>
        </div>
    );
}
