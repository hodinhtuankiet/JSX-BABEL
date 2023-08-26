
import { useState } from 'react'

  const orders = [100,200,300]

function App() {
  const [info,setInfo] = useState({
    name : 'orders',
    age: 17,
    address : '123 street Dinh Tien Hoan'
  })
  const handleUpdate = () => {
    setInfo({
      // add info
    ...info,
    bio: 'John',
    })
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>handleUpdate</button>
    </div>
  );
}

export default App;
