import React, { useState, useEffect } from 'react'


const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const { setFeaturedResult, isLoggedIn, setIsLoggedIn, clickedMessage, userToken } = props
    const [username, setUsername] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        console.log('Bearer ', userToken)
        fetch('https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
        }).then(response => response.json())
            .then(result => {
                const username = result.data.username
                setUsername(username);
                for (let i = 0; i < posts.length; i++) {
                    if (posts[i].author.username === username) {
                        posts[i].isAuthor = true;
                    }
                }
            })
            .catch(console.error)
        const fetchPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/posts')
            const data = await resp.json()
            const posts = data.data.posts
            setPosts(posts)
        }
        fetchPosts();
    }, [isLoggedIn, userToken])

    function postMatches(post, text) {
        if (post.title.toLowerCase().includes(text.toLowerCase())) {
            return true
        }
    }

    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length > 0 ? filteredPosts : posts;

    return <>
        <h1 className="posttitle">
            Posts
        </h1>
        <div className="SearchEverything">
            <label className="SearchText">Search Posts</label>
            <input className="SearchInput" onChange={event => setSearchTerm(event.target.value)}></input>
        </div>

        {postsToDisplay.map(post => {
            return <div className="post" key={post._id} onClick={(event) => {
                event.preventDefault();
                console.log(post)
                console.log(post.isAuthor)
                setFeaturedResult(post)
            }} >
                <div className='title'> Title: {post.title}</div>
                <div className='usernamee'> Post By: {post.author.username}</div>
                <div className='location'> Location: {post.location}</div>
                <div className='description'> Description:  {post.description} </div>

            </div>
        })
        }
    </>

}

export default Posts