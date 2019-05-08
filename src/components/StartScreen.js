import React from 'react';
import PlayerForm from "./PlayerForm";

const styles = {
    container: {
        display: 'flex',
        padding: '2em',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    },
};

const StartScreen = (props) => (
    <div style={styles.container}>
        {props.players.map((p, index) =>
            <PlayerForm
                onInputChange={
                    (e) => props.onPlayerChange(index, e.target.name, e.target.value)
                }
                playerIndex={index+1}
                key={index}/>
        )}
        <button onClick={props.startGame}>Start</button>
    </div>
);

export default StartScreen;
