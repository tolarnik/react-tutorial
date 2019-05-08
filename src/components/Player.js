import React from 'react'

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

class Player extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            counter: parseInt(this.props.playerInitialHp)
        }
    }

    increment = () => {
        this.setState(prevState => ({counter: prevState.counter +1}))
    };

    decrement = () => {
        this.setState(prevState => ({counter: prevState.counter -1}))
    };

    render() {
        const {playerIndex:index, useMobileStyles:mobile, playerName:name } = this.props;

        return (
            <div style={{
                ...styles.card,
                ...{backgroundColor: colors[index-1]},
                ...(mobile && index === 0 ? styles.inverted: {})
            }}>
                <button onClick={this.increment} data-cy={"inc-"+index} style={styles.button}>
                    <span role="img" aria-label="Plus">➕</span>
                </button>
                <div>
                    <strong  data-cy={"name-"+index}>
                        Player: {name}
                    </strong>
                    <div style={styles.center} data-cy={"val-"+index}>
                        {this.state.counter}
                    </div>
                </div>
                <button onClick={this.decrement} data-cy={"dec-"+index} style={styles.button}>
                    <span role="img" aria-label="Minus">➖</span>
                </button>
            </div>
        )
    }
}

export default Player
