
import { useState } from 'react'


function App() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleGift = () => {
    console.log({
      name,email
    })
    }

  return (
    <div className="App" style={{padding: 20}}>
      <input
      value={name}
      onChange={e=> setName(e.target.value)}
      />
      <input
      value={email}
      onChange={e=> setEmail(e.target.value)}
      />
      <button onClick={handleGift}>Send</button>
    </div>
  );
}

export default App;
