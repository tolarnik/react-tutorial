import React from "react";

const WithBoardData = (Component) =>
    class HOC extends React.PureComponent {

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
            }
        }

        handlePlayerChange = (playerIndex, parameterName, newValue) => {

            const newPlayers = this.state.players.slice();
            newPlayers[playerIndex][parameterName] = newValue;

            this.setState({
                players: newPlayers
            })
        };

        getUrlToBoard = () => `/board/${this.state.players[0].name}🎲${this.state.players[0].hp}/${this.state.players[1].name}🎲${this.state.players[1].hp}`;

        render() {
            return <Component onPlayerChange={this.handlePlayerChange} getUrlToBoard={this.getUrlToBoard} players={this.state.players} />
        }
    };

export default WithBoardData
