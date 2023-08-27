
import { useState } from 'react'

const courses = [
  {
    id: 1,
    name: 'Course1'
  },
  {
    id: 2,
    name: 'Course2'
  },
  {
    id: 3,
    name: 'Course3'
  },

]
function App() {
  const [checked,setCheck] = useState([])

  const handleCheck = (id) =>{
    setCheck(prev =>{
      const isChecked = checked.includes(id)
      if(isChecked) {
        return checked.filter(item => item !== id)
      }else{
        return [...prev,id]
      }
    })
  }
  const handleSumit = () =>{
    console.log({ ids: checked})
  }
  return (
    <div className="App" style={{padding: 20}}>
     {
      courses.map((course) => {
        return (
          <div key={course.id}>
            <input 
            type='checkbox'
            name='course'
            checked={checked.includes(course.id)} 
            onChange={()=> handleCheck(course.id)}
            />{course.name}
          </div>
        )
      }
     )}
      <button onClick={handleSumit} >Send</button>
    </div>
  );
}

export default App;
