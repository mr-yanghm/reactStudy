import React from "react";
import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((count) => count + 1);
  };

  const onDecrease = () => {
    //   setCount(count - 1);
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
