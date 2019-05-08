import React from 'react';
import PlayerForm from "./PlayerForm";

const styles = {
    heading: {
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        padding: '2em',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    button: {
        display: 'block',
        margin: '1em auto',
        textAlign: 'center',
        background: '#81b2ff',
        border: '1px solid #6565FF',
        padding: '1em',
        fontSize: '2rem',
        textDecoration: 'none',
        borderRadius: '5px',
        color: 'white',
        textTransform: 'uppercase',
        cursor: 'pointer'
    }
};

const colors = [
    "#b5ffb3",
    "#ffb3be",
];

const StartScreen = (props) => (
    <>
        <div style={styles.heading}>
            <h1>Super Ultra HP Counter</h1>
        </div>
        <div style={styles.container}>
        {props.players.map((p, index) =>
            <PlayerForm
                onInputChange={
                    (e) => props.onPlayerChange(index, e.target.name, e.target.value)
                }
                playerIndex={index+1}
                key={index}
                color={colors[index]}
            />
        )}
        </div>
        <button onClick={props.startGame} style={styles.button}>
            Start <br /> <span role="img" aria-label={"Start game"}>🎮</span>
        </button>
    </>
);

export default StartScreen;
