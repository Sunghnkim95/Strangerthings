import React, {useState, useEffect} from 'react'


const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const {setFeaturedResult, isLoggedIn, setIsLoggedIn, clickedMessage, userToken} = props
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
    .then (result => {
        console.log(result);
        const username = result.data.username
        console.log(result.data.username)
        setUsername(username);
        console.log(username)
        for(let i=0; i<posts.length; i++){
            if (posts[i].author.username === username){
                posts[i].isAuthor = true;
                // console.log('Why Hello There')
            }
            // if (posts[i].author.username === usernameString)
            //                 posts[i].isAuthor = true;
        }
            console.log(posts)
    })
    .catch(console.error)
        const fetchPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/posts')
            const data = await resp.json()
            const posts = data.data.posts
            setPosts(posts)
            console.log(posts)
            for(let i=0; i<posts.length; i++){
                
                if (posts[i].author.username === 'peter'){
                    posts[i].isAuthor = true;
                    
                }
        }
    }
        fetchPosts();
    }, [isLoggedIn, userToken])

        function postMatches (post, text) {
            if (post.title.toLowerCase().includes(text.toLowerCase())){
                return true
            }
        }

        const filteredPosts = posts.filter (post => postMatches(post,searchTerm));
        const postsToDisplay = searchTerm.length > 0 ? filteredPosts : posts;

    return <> 
    <h1 className="posttitle">
        Posts
    </h1>
    <label>Search Posts</label>
    <input  onChange={event => setSearchTerm(event.target.value)}></input>
    <button>Search</button>
    <br></br>

    {postsToDisplay.map( post => { return <div className="post" key={post._id} onClick={(event) => {
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


// {posts.map( post => { !post.isAuthor ? <div className="post" key={post._id} onClick={(event) => {
//     event.preventDefault();
   
//     setFeaturedResult(post)
// }} >
//                    <div className='title'> Title: {post.title}</div>
//                    <div className='usernamee'> Post By: {post.author.username}</div>
//                    <div className='location'> Location: {post.location}</div>
//                    <div className='description'> Description:  {post.description} </div>
//                     </div> : <div className="post" key={post._id}> 
    

//                    <div className='title'> Title: {post.title}</div>
//                    <div className='usernamee'> Post By: {post.author.username}</div>
//                    <div className='location'> Location: {post.location}</div>
//                    <div className='description'> Description:  {post.description} </div>
//                     </div> 
                    
                
//                                 }
//                     )
//                     }
// </>

export default Posts