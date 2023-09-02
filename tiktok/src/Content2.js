import { useEffect, useState } from 'react'


//  useEffect(callback)
// -> gọi callback sau khi component re-render
// -> gọi callback sau khi component thêm element vào DOM (return thực hiện trước , useEffect sau)
//  useEffect(callback,[])
// -> chỉ gọi callback 1 lần sau khi component mounted , không bị re-render
//  useEffect(callback,[deps])
// -> callback will recall when the deps changes

// ** callback luôn được gọi sau khi component mounted
// ** cleanup function luôn được gọi trước khi component unmounted 
const tabs = ['posts','comments', 'albums']
function Content(){
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])
    const [type,setType] = useState('posts')
    const [showGoToTop,setGoToTop] = useState(false)
    
    useEffect(()=>{       
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then((posts) => {
            setPosts(posts)
        })
    },[type])
    
    useEffect(() =>{
        const handleScroll = () => {
            if(window.scrollY >= 300){
                // show
                setGoToTop(true)
            }else{
                // hide
                setGoToTop(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        console.log('addEventListener');
        // clean up function , avoid memory leaks
        return () => {
        window.removeEventListener('scroll',handleScroll)
        console.log('removeEventListener')
        }
    },[])

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
        {showGoToTop && (
            <button
            style={{
            position: 'fixed',
            right: 20,
            bottom: 20,
            }}
            >Go To Top</button>
        )}
        </div>
    )
}
export default Content;
