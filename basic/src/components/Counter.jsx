import React from "react";
import { useState } from "react";
export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <p className="number">
        {count} <span>/{total}</span>
      </p>
      <button
        className="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
          // setCount(count + 1 );
          //왜 setCount = count + 1 하면 안되는가 ?
        }}
      >
        Add +
      </button>
    </div>
  );
}
