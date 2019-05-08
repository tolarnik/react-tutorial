import React from 'react';
import StartScreen from "./components/StartScreen";
import GameBoard from "./components/GameBoard";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const App = () =>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={StartScreen}/>
            <Route path="/board/:playerOne/:playerTwo" render={(props) =>{

                const playerOneParams = props.match.params.playerOne.split('🎲');
                const playerTwoParams = props.match.params.playerTwo.split('🎲');

                return (
                    <GameBoard
                        players={[
                            {
                                name: playerOneParams.length === 2 ? playerOneParams[0] : '',
                                hp: playerOneParams.length === 2 && !isNaN(parseInt(playerOneParams[1])) ? parseInt(playerOneParams[1]) : 20,
                            },
                            {
                                name: playerTwoParams.length === 2 ? playerTwoParams[0] : '',
                                hp: playerTwoParams.length === 2 && !isNaN(parseInt(playerTwoParams[1])) ? parseInt(playerTwoParams[1]) : 20,
                            },
                        ]}
                        useMobileStyles={!window.matchMedia("(min-width: 769px)").matches}
                    />
                );
            }}
            />
            <Route
                render={() =>{
                    console.log('redirect');
                    return (<Redirect to="/"/>)}}
            />
        </Switch>
    </BrowserRouter>;

export default App;
