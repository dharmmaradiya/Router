import React, { useState } from "react";

function Counter() {
  const [state, setState] = useState(0);

  function inc() {
    setState(state + 1);
  }
  function dec() {
    setState(state - 1);
  }
  return (
    <div className="container">
       <h1>Counter is {state}</h1>
      <button onClick={(inc)} className="btn">Incriment</button> 
        <button onClick={dec} className="btn">Decrement</button>
      <button onClick={() => setState(0)} className="btn">Reset</button>

        
      
    </div>
  );
}

export default Counter;