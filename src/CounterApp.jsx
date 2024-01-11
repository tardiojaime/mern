import React, { useState } from "react";
import PropTypes from "prop-types";
export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handle = () => {
        setCounter(counter + 1);
    }
    const handlesub = () =>{
        setCounter((counter)=>counter-1)
    }
    const reset = () =>{
        setCounter(0);
    }
  return (
    <>
      <h1>Counter App</h1>
      <h2>{ counter }</h2>
      <button onClick={handle}>incrementar</button>
      <button onClick={handlesub}>subtract</button>
      <button onClick={reset}>reset</button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number,
};
CounterApp.defaultProps = {
  value: 21,
};
