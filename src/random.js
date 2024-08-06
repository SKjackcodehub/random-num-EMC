import { useState } from "react";

function Random() {
  const [count, setCount] = useState(0);

  function randomnum() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    setCount(randomNumber);
  }

  function reset() {
    setCount(0); 
  }

  return (
    <div className="container">
      <h1>Random Number Generator</h1>
      <h1>{count}</h1>
      <button onClick={randomnum} className="btn">Click</button>
      <button onClick={reset}  className="btn">Reset</button>
    </div>
  );
}

export default Random;
