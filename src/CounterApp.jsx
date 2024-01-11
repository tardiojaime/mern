import React, { useState } from "react";
import PropTypes from "prop-types";
export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(11);

    const handle = () => {
        setCounter(counter + 1);
    }

  return (
    <>
      <h1>Counter App {value}</h1>
      <h2>{counter}</h2>
      <button onClick={handle}>incrementar</button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number,
};
CounterApp.defaultProps = {
  value: 21,
};
