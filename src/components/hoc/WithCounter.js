import React from "react";

const withCounter = (Component) =>
    class HOC extends React.PureComponent {

        constructor(props) {
            super(props);
            this.state = {
                counter: props.playerInitialHp
            }
        }

        onIncrement = () => {
            this.setState(prevState => (
                {counter: +prevState.counter+1}
            ))
        };


        onDecrement = () => {
            this.setState(prevState => (
                {counter: +prevState.counter-1}
            ))
        };

        render(){
            return(
                <Component
                    onIncrement={this.onIncrement}
                    onDecrement={this.onDecrement}
                    value={this.state.counter}
                    {...this.props}
                />
            )
        }
    };

export default withCounter
