import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
   <div>
    <h1>Counter:</h1>
    <div>
      <button onClick={decrement}>-</button>
      {counter}
      <button onClick={increment}>+</button>
    </div>
   </div>
  )
}

export default Counter