import React from "react";
import "./Effect.css";
import { useState, useEffect } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  });

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
