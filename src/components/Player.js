import React from 'react'

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    center: {
        fontSize: '5rem'
    }
};

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
        return (
            <div style={styles.card}>
                <button onClick={this.increment} data-cy="inc-1">
                    <span role="img" aria-label="Plus">➕</span>
                </button>
                <strong  data-cy="name-1">Player: {this.props.playerName}</strong>
                <div style={styles.center} data-cy="val-1">
                    {this.state.counter}
                </div>
                <button onClick={this.decrement} data-cy="dec-1">
                    <span role="img" aria-label="Minus">➖</span>
                </button>
            </div>
        )
    }
}

export default Player
