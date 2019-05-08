import React, {useState} from "react";

const withCounter = Component => (props) =>{

    const [count, setCount] = useState(props.playerInitialHp);

    return (
        <Component
            onIncrement={() => setCount(count + 1)}
            onDecrement={() => setCount(count - 1)}
            value={count}
            {...props}
        />
    );
};

export default withCounter
