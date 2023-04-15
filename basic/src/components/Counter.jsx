import React from 'react';
import { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <span className='number'>{count}</span>
            <button className = 'button' onClick = {()=>{
                setCount(count + 1 ); 
                //왜 setCount = count + 1 하면 안되는가 ?
            }}>Add + </button>
            
        </div>
    );              
}

