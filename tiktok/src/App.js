
import { useState } from 'react'


function App() {
  // cause empty array , call variable
  const storageJobs = JSON.parse(localStorage.getItem('job'))
  // convert json to array
  // JSON.parse(storageJobs)
  // if storageJobs is empty string then return empty array
  const [jobs,setJobs] = useState(storageJobs ?? [])
  const [job,setJob] = useState('')

 
  const handleSumit = () =>{
    setJobs(prev => {
      const newJobs = [...prev,job]
      // save to localStorage
      const jobsJson = JSON.stringify(newJobs)
      localStorage.setItem('job',jobsJson)
      return newJobs;
    })
    setJob('')
  } 
  return (
    <div className="App" style={{ padding: 20 }}>
      <input value={job} onChange={e => setJob(e.target.value)}/>
      <button onClick={handleSumit}>Send</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
  
}

export default App;
