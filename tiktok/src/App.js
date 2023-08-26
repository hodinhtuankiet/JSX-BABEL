
import { useState } from 'react'

  const orders = [100,200,300]

function App() {
  const total = orders.reduce((acc, order) => acc + order)
  const [counter, setCounter] = useState(()=>{
    const total = orders.reduce((acc, order) => acc + order)
    // get values returned to the initial state
    return total
  });

  const handleIncrease = () =>{
    setCounter(prevState => prevState+1)
    setCounter(prevState => prevState+1)
    setCounter(prevState => prevState+1)
  }
  return (
    <div className="App" style={{padding: 20}}>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
