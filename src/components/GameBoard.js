import React from 'react'
import Player from "./Player";

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flex: '1 1 0',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mobileContainer: {
        flexDirection: 'column',
    },
    floatButton: {
        position: 'fixed',
        fontSize: '2.5rem',
        left: 1,
        top: '50%',
        marginTop: '-1.75rem',
        zIndex: 2,
        textDecoration: 'none',
        background: 'transparent',
        border: '0',
        padding: 0,
        cursor: 'pointer'
    }
};

const GameBoard = (props) => (
    <div style={props.useMobileStyles ? {...styles.container, ...styles.mobileContainer} : styles.container}>
        <button style={styles.floatButton} onClick={props.backToStart}>
            <span role="img" aria-label={"Back button"}>🔙</span>
        </button>

        {props.players.map((p, index) =>
            <Player playerName={p.name}
                    playerInitialHp={p.hp}
                    playerIndex={index+1}
                    useMobileStyles={props.useMobileStyles}
                    key={index}
            />
        )}
    </div>
);

export default GameBoard
