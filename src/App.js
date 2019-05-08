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
    render() {
        return (
            <div style={styles.container}>
                <PlayerForm />
                <Player />
            </div>
        );
    }
}

export default App;
