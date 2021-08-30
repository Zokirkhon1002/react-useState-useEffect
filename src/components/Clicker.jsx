import React, { useState } from "react";


const Clicker = () => {
    const [count, setCount] = useState(0);

    function increment() {
      setCount((prevState) => {
       return prevState + 1;
      });
      setCount(prev => prev+1)
    }
  
    return (
      <div className="App app2">
        <h1>Counter: {count}</h1>
        <button onClick={increment} className="info">
          Increment +{" "}
        </button>
        <button onClick={() => setCount(count - 1)} className="danger">
          Decremenet -{" "}
        </button>
      </div>
    );
}
export default Clicker;