import { useEffect, useState } from 'react'


//  useEffect(callback)
// -> gọi callback sau khi component re-render
// -> gọi callback sau khi component thêm element vào DOM (return thực hiện trước , useEffect sau)
//  useEffect(callback,[])
// -> chỉ gọi callback 1 lần sau khi component mounted , không bị re-render
//  useEffect(callback,[deps])
// -> callback will recall when the deps changes

// ** callback luôn được gọi sau khi component mounted
const tabs = ['posts','comments', 'albums']
function Content(){
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])
    const [type,setType] = useState('posts')
    
    useEffect(()=>{
        console.log('type changed');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then((posts) => {
            setPosts(posts)
        })
    },[type])

    return (
        <div>
        {tabs.map(tab => (
          <button
            key={tab}
            // if tab active then css button 
            style={type === tab ? {
                color: '#fff',
                backgroundColor: '#333',
            }:{}}
            onClick={()=> setType(tab)}
            >{tab}</button>  
        ))}            
       <input
       value={title}
       onChange={e => setTitle(e.target.value)}
       />  
       <ul>
        {posts.map(post =>(
        <li key={post.id}>{post.title || post.name}</li>
        ))}
        </ul>
        </div>
    )
}
export default Content;
