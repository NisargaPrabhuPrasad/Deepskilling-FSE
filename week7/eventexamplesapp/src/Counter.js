import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Method 1: Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Method 2: Say Hello
  const sayHello = () => {
    console.log("Hello - Have a great day!");
    alert("Hello - Have a great day!");
  };

  // Multiple methods for increment button
  const handleIncrementClick = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Counter Value: {count}</h2>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
