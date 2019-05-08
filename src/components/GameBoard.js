import React from 'react'
import Player from "./Player";

const styles = {
    floatButton: {
        position: 'fixed',
        fontSize: '2.5rem',
        left: 1,
        top: '50%',
        marginTop: '-1.75rem',
        zIndex: 2,
        textDecoration: 'none',
    }
};

const GameBoard = (props) => (
    <div>
        <button style={styles.floatButton} onClick={props.backToStart}>
            <span role="img" aria-label={"Back button"}>🔙</span>
        </button>

        {props.players.map((p, index) => <Player playerName={p.name} playerInitialHp={p.hp} playerIndex={index+1}  key={index}/>)}
    </div>
);

export default GameBoard
