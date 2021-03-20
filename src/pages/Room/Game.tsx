import React from 'react';
import 'pages/Room/Room.scss';
import Container from 'components/Container/Container';

function Game() {
    return (
        <Container>
            <header>
                <h1>Guess</h1>
            </header>
            <nav>
                <div className="scoreboard"></div>
                <div className="options">
                    <button className="leave">Leave room</button>
                </div>
            </nav>
            <main>
                <div className="headText"></div>
                <div className="countdownBar"></div>
                <div className="answers">
                    <div className="answer"></div>
                    <div className="answer"></div>
                    <div className="answer"></div>
                    <div className="answer"></div>
                </div>
            </main>
        </Container>
    );
}

export default Game;
