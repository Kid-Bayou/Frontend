import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const countType = () => {
    if (count ===0){
      return "is neurtral"
    } 
    else if ( count > 0) {
      return "is positive"
    }
    else {
      return "is negative"
    }
  }

  return (
    <div>
      <div>{count} {countType()} </div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;
