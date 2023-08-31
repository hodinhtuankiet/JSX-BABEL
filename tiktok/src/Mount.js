
import { useState } from 'react'
import Content from './Content1';

function App() {
  const [show,setShow] = useState(false)
  return (
    <div style={{ padding: 20 }}>
      <button onClick={()=> {setShow(!show)}}>Show</button>
     {show && <Content />}
    </div>
  );
  
}

export default App;
