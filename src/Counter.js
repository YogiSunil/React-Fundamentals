// useState "hook"
import { useState } from "react";
// Hooks begin with "use"

function Counter({ value, step }) {
  const [count, setCount] = useState(value); // Set initial count to value
  
  return (
    <div>
      <button onClick={() => setCount(count - step)}>-</button> {/* Decrement by step */}
      <div>{count}</div>
      <button onClick={() => setCount(count + step)}>+</button> {/* Increment by step */}
    </div>
  );
}

export default Counter;