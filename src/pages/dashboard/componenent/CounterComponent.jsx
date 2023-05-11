import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increamentByOne, decreamentByOne, increamentByValue, decreamentByValue } from "../../../store/CounterSlice";

function CounterComponent() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => dispatch(increamentByOne())}>Increment By One</button>
            <button onClick={() => dispatch(decreamentByOne())}>Decrement by One</button>
            <input className="text" type="text" id="inputField" />
            <button onClick={() => dispatch(increamentByValue(Number(document.querySelector("#inputField").value)))}>Increament By Value</button>
            <button onClick={() => dispatch(decreamentByValue(Number(document.querySelector('#inputField').value)))}>Decreament By Value</button>
        </div>
    )
}

export default CounterComponent;
