import React, { useState } from "react";
import './Counter.css';

const Counter = (props) => {
    const [counter, setCounter] = useState(props.counter);

    const increase = () => {
        setCounter(counter +1);
    };

    const decrease = () => {
        if (counter > 0) {
            setCounter(counter -1);
        } else {
            alert('¡El contador está en 0!')
        }
    };

    console.log(counter)

    return (
    <div className="counterCont">
        <button onClick={() => decrease()}>-</button>
        <h3>{counter}</h3>
        <button onClick={() => increase()}>+</button>
    </div>
    )
};

export default Counter;