
import { useState } from 'react'


function App() {
  const gifts = [
    'CPU', 
    'GPU', 
    'RAM', 
    'HDD', 
    'CPU', 
    'GPU',
  ]
  const [giftList, setGiftList] = useState()

  const handleGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGiftList(gifts[index])
    }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{giftList || 'No reward yet'}</h1>
      <button onClick={handleGift}>Get rewarded</button>
    </div>
  );
}

export default App;
