import React, {useState, useEffect} from 'react'


const Posts = () => {
    const [posts, setPosts] = useState([])
    console.log('posts', posts)

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-RM-WEB-PT/posts')
            const data = await resp.json()
            const posts = data.data.posts
            setPosts(posts)
            console.log(posts)
        }
        fetchPosts();
    }, [])
    return <>
    <h1>
        Posts
    </h1>
    {posts.map( post => <div key={post._id}>
                       <div className='title'> Title: {post.title}</div>
                       <div className='location'> Location: {post.location}</div>
                       <div className='description'> Description:  {post.description} </div>
                        </div>)}
    </>


}

export default Posts