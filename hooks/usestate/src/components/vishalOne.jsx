import React from "react";
import { useState } from "react";
import "./vishalOne.css";
export default function VishalOne() {
  const [count, setCount] = useState(0);
  return (
    <div className="but">
      <button
        onClick={() => {
          count === 0 ? setCount(count) : setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          count === 20 ? setCount(count) : setCount(count + 1);
        }}
      >
        increment
      </button>
    </div>
  );
}
