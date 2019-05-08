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
                <button onClick={this.increment}  data-cy={"inc-"+this.props.playerIndex}>
                    <span role="img" aria-label="Plus">➕</span>
                </button>
                <strong  data-cy={"name-"+this.props.playerIndex}>
                    Player: {this.props.playerName}
                </strong>
                <div style={styles.center} data-cy={"val-"+this.props.playerIndex}>
                    {this.state.counter}
                </div>
                <button onClick={this.decrement} data-cy={"dec-"+this.props.playerIndex}>
                    <span role="img" aria-label="Minus">➖</span>
                </button>
            </div>
        )
    }
}

export default Player
