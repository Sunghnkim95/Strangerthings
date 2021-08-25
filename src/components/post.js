import React, {useState, useEffect} from 'react'


const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const {setFeaturedResult, isLoggedIn, setIsLoggedIn, clickedMessage} = props


    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/posts')
            const data = await resp.json()
            const posts = data.data.posts
            setPosts(posts)
            console.log(posts)
        }
        fetchPosts();
    }, [])
    return <>
    <h1 className="posttitle">
        Posts
    </h1>
    
    {posts.map( post => <div className="post" key={post._id} onClick={(event) => {
        event.preventDefault();
       
        setFeaturedResult(post)
    }} >
                       <div className='title'> Title: {post.title}</div>
                       <div className='usernamee'> Post By: {post.author.username}</div>
                       <div className='location'> Location: {post.location}</div>
                       <div className='description'> Description:  {post.description} </div>
                        </div>
                        )
                        }
    </>


}

export default Posts