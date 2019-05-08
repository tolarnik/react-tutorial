import React from "react";

const styles = {
    tab: {
        display: 'flex',
        flexDirection: 'column',
        border: '3px solid lightgray',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '1em',
        padding: '3em 4em',
    },
    tabHeader: {
        textAlign: 'center',
    },
    formGroup: {
        padding: '2em 0',
    },
};

const PlayerForm = (props) => (
    <div style={{...styles.tab, backgroundColor: props.color}}>
        <h2 style={styles.tabHeader}>Player {props.playerIndex}</h2>
        <div style={styles.formGroup}>
            <div>Name:</div>
            <input name={'name'}
                   type={'text'}
                   data-cy={"player-"+props.playerIndex+"-name"}
                   onChange={props.onInputChange}
                   autoFocus={props.playerIndex === 0}
            />
        </div>
        <div style={styles.formGroup}>
            <div>HP:</div>
            <input name={'hp'}
                   type={'number'}
                   data-cy={"player-"+props.playerIndex+"-hp"}
                   onChange={props.onInputChange}
            />
        </div>
    </div>
);

export default PlayerForm;
