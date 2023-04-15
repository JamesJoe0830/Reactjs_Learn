import React from "react";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
// 자식 component에 props로 넘겨줄 total
  return (
    <div>
      <div className="banner">
        Total Count = {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      {/* 이부분 다시보기 */}
      <Counter total={count}  onClick={handleClick}/> 
      <Counter total={count}  onClick={handleClick}/>
    
    </div>
  );
}
