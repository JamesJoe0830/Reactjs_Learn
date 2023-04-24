import React, { useState, useEffect } from "react";

import "./AppXY.css";

export default function AppXY() {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
const [position, setPosition] = useState({x:0, y:0, z:0}) //연관있는 데이터는 객체로 정의 
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // setX(e.clientX);
        // setY(e.clientY);
        // setPosition({x:e.clientX, y:e.clientY})
        setPosition(prev => ({...prev, x: e.clientX})); // x만 업데이트 나머지는 spread 연산자(...)를 통해 이전의 값 유지
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
