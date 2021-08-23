import React, {useState, useEffect} from 'react';

const Postdetails = (props) => {
    const {featuredResult, setIsLoggedIn, setUserToken} = props

    function logoutUser () {
        setIsLoggedIn(false)
        setUserToken('')
    }

    if (!featuredResult){
        return ( <><div className="postdetails">
                    <h1>Featured Post</h1>
                <span className="clickformore">Click a Post for more info!</span>
                <button onClick={()=>{
                                 logoutUser()
                             }}>LogOut</button>
        </div></>)
    }

    const {title, price, location, description, willDeliver} = featuredResult

    return (<>
                  <div className="postdetails">
                  <h1>Featured Post</h1>
                
                  <div key="firstpost">
                              <div className='title'> Title:{featuredResult.title} </div>
                              <div className='price'>Price: {featuredResult.price}</div>
                              <div className='description'>Description: {featuredResult.description}</div>
                              <div className='location'>Location: {featuredResult.location}</div>
                              <div className='willdeliver'>Will Deliver? : {featuredResult.willDeliver}</div>
                             <button onClick={()=>{
                                 logoutUser()
                             }}>LogOut</button>
                 </div>
             </div>
    
     </>)
                
}

// const Postdetails = () => {

//     const [firstFeaturedPost, setFirstFeaturedPost] = useState([])
    
//     useEffect(() => {
//         const fetchFeaturedPost = async () => {
//             const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/posts')
//             const data = await resp.json()
//             const posts = data.data.posts
//             const firstFeaturedPost=posts[0]
//             setFirstFeaturedPost(firstFeaturedPost)
//             console.log(firstFeaturedPost)
//         }
//         fetchFeaturedPost();
//     }, [])

//     return (<>
    
//              <div className="postdetails">
//                  <h1>Featured Post</h1>
                
//                  <div key="firstpost">
//                              <div className='title'> Title:{firstFeaturedPost.title} </div>
//                              <div className='price'>Price: {firstFeaturedPost.price}</div>
//                              <div className='description'>Description: {firstFeaturedPost.description}</div>
//                              <div className='location'>Location: {firstFeaturedPost.location}</div>
//                              <div className='willdeliver'>Will Deliver? : {firstFeaturedPost.willDeliver}</div>
//                 </div>
//             </div>
    
//     </>)


// }

 // const [post, setPost] = useState()
    
    //     useEffect(() => {
    //             fetch('https://strangers-things.herokuapp.com/api/2105-VPI-RM-WEB-PT/posts')
    //             .then((res) => res.json())
    //             .then((post) => {
    //                 setPost(post)
    //                 console.log('post',post)
    //             })
    //             .catch((err)=> {
    //                 console.log(err);
    //             });
    //     }, [])
         
    //     return (<>
       
    //         <div className="postdetails">
    //             <h1>Featured Post</h1>
                
    //             <div key="firstpost">
    //                         <div className='title'> Title: </div>
    //                         <div className='price'> Price: </div>
    //                         <div className='location'> Location: </div>
    //                         <div className='description'> Description: </div>
    //                         <div className='deliver'> Will Deliver?: </div>
    //                         <div className='date'> Created At: </div>
                            
    //             </div>
    
    //         </div>
    
    //     </> );
// const Postdetails = () => {

//    async function fetchPost () {
//         const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-RM-WEB-PT/posts')
//         const data = await resp.json()
//         console.log(data)
//         const post= data.data.posts[0]
//         console.log('post', post)
//         return post
//     }
    
//    fetchPost()

//         return <>
   
//         <div className="postdetails">
//             <h1>Featured Post</h1>
            
//            { <div key="firstpost">
//                         <div className='title'> Title: </div>
//                         <div className='price'> Price: </div>
//                         <div className='location'> Location: </div>
//                         <div className='description'> Description: </div>
//                         <div className='deliver'> Will Deliver?: </div>
//                         <div className='date'> Created At: </div>
                        
//             </div>}

//         </div>

//     </> 
// }


// const Postdetails =  () => {

//     const [posts, setPosts] = useState([])
//     console.log('posts', posts)

//     useEffect(() => {
//         const fetchPosts = async () => {
//             const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-RM-WEB-PT/posts')
//             const data = await resp.json()
//             const posts = data.data.posts
//             setPosts(posts)
//             console.log(posts)
//         }
//         fetchPosts()
        
//     }, [])
     
//     console.log(posts)
    
    
    

//     return <>
   
//         <div className="postdetails">
//             <h1>Featured Post</h1>
            
//             <div key="firstpost">
//                         <div className='title'> Title: </div>
//                         <div className='price'> Price: </div>
//                         <div className='location'> Location: </div>
//                         <div className='description'> Description: </div>
//                         <div className='deliver'> Will Deliver?: </div>
//                         <div className='date'> Created At: </div>
                        
//             </div>

//         </div>

//     </> 
// }

export default Postdetails;