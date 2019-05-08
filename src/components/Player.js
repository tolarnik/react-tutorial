import React from 'react'
import withCounter from "./hoc/WithCounter";

const styles = {
    card: {
        display: 'flex',
        flex: '1 1 0',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inverted: {
        transform: 'rotate(180deg)',
    },
    center: {
        fontSize: '5rem',
        textAlign: 'center'
    },
    button: {
        width: '100%',
        background: 'transparent',
        border: '0',
        height: '60px',
        fontSize: '2rem',
        cursor: 'pointer'
    }
};

const colors = [
    "#b5ffb3",
    "#ffb3be",
];

const Player = (props) => (
    <div style={{
        ...styles.card,
        ...{backgroundColor: colors[props.playerIndex-1]},
        ...(props.useMobileStyles && props.playerIndex === 0 ? styles.inverted : {})
    }}>
        <button onClick={props.onIncrement} data-cy={"inc-" + props.playerIndex} style={styles.button}>
            <span role="img" aria-label="Plus">➕</span>
        </button>
        <div>
            <strong data-cy={"name-" + props.playerIndex}>Player: {props.playerName}</strong>
            <div style={styles.center} data-cy={"val-" + props.playerIndex}>
                {props.value}
            </div>
        </div>
        <button onClick={props.onDecrement} data-cy={"dec-" + props.playerIndex} style={styles.button}>
            <span role="img" aria-label="Minus">➖</span>
        </button>
    </div>
);

export default withCounter(Player);
