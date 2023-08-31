import { useEffect, useState } from 'react'


//  useEffect(callback)
// -> gọi callback sau khi component re-render
// -> gọi callback sau khi component thêm element vào DOM (return thực hiện trước , useEffect sau)
//  useEffect(callback,[])
// -> chỉ gọi callback 1 lần sau khi component mounted , không bị re-render
//  useEffect(callback,[deps])

// ** callback luôn được gọi sau khi component mounted
const tabs = ['posts','comment', 'albums']
function Content(){
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])
    const [type,setType] = useState('posts')

    console.log(type);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((posts) => {
            setPosts(posts)
        })
    },[])

    return (
        <div>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={()=> setType(tab)}
            >{tab}</button>  
        ))}            
       <input
       value={title}
       onChange={e => setTitle(e.target.value)}
       />  
       <ul>
        {posts.map(post =>(
        <li key={post.id}>{post.title}</li>
        ))}
        </ul>
        </div>
    )
}
export default Content;
