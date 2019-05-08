import React, {Component} from 'react';
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";

const styles = {
    container: {
        display: 'flex',
        padding: '2em',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    },
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hp: 0,
            gameStarted: false
        }
    }

    render() {
        const {name, hp} = this.state;

        return (
            <div style={styles.container}>
                <PlayerForm onInputChange={this.handleInputChange} />
                <button onClick={this.startGame}>Start</button>
                {this.state.gameStarted && <Player playerName={name} playerInitialHp={hp}/>}
            </div>
        );
    }

    handleInputChange = (e) => {
        let inputName = e.target.name;
        this.setState({
            [inputName]: e.target.value
        })
    };

    startGame = () => {
        this.setState({
            gameStarted: true
        })
    };

}

export default App;
