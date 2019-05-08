import React, {Component} from 'react';
import GameBoard from "./components/GameBoard";
import StartScreen from "./components/StartScreen";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    name: '',
                    hp: 0,
                },
                {
                    name: '',
                    hp: 0,
                }
            ],
            gameStarted: false
        }
    }

    render() {
        const {players} = this.state;

        if (this.state.gameStarted) {
            return <GameBoard backToStart={this.backToStart} players={players}/>;
        } else {
            return <StartScreen onPlayerChange={this.handlePlayerChange} players={players} startGame={this.startGame}/>;
        }
    }

    handlePlayerChange = (playerIndex, parameterName, newValue) => {

        const newPlayers = this.state.players.slice();
        newPlayers[playerIndex][parameterName] = newValue;

        this.setState({
            players: newPlayers
        })
    };

    startGame = () => {
        this.setState({
            gameStarted: true
        })
    };

    backToStart = () => {
        this.setState({
            players: [
                {
                    name: '',
                    hp: 0,
                },
                {
                    name: '',
                    hp: 0,
                }
            ],
            gameStarted: false
        })
    };

}

export default App;
