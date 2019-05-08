import React from "react";

const styles = {
    formGroup: {
        padding: '2em 0',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
    },
};

const PlayerForm = (props) => (
    <div style={styles.form}>
        <h2>Player</h2>
        <div style={styles.formGroup}>
            <div>Name:</div>
            <input name={'name'} type={'text'} data-cy="player-1-name" onChange={props.onInputChange} />
        </div>
        <div style={styles.formGroup}>
            <div>HP:</div>
            <input name={'hp'} type={'number'} data-cy="player-1-hp" onChange={props.onInputChange} />
        </div>
    </div>
);

export default PlayerForm;
