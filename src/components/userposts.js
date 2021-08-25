import React, {useState, useEffect} from 'react'

import Editpostform from './editpostform.js'

const Userposts = () => {
    const [myPosts, setMyPosts] = useState([])
    const userToken = localStorage.getItem("token")
    const [titleString, setTitleString] = useState('')
    const [descriptionString, setDescriptionString] = useState('')
    const [priceString, setPriceString] = useState('')
    const [locationString, setLocationString] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    const [wantsToEdit, setWantsToEdit] = useState(false)
    const [myPostTitle, setMyPostTitle] = useState('')
    const [postId, setPostId] = useState('')
    
    useEffect(() => {
        const fetchMyPosts = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/users/me', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            })
            const data = await resp.json()
            const myPosts = data.data.posts
            setMyPosts(myPosts)
            console.log(myPosts)
        }
        fetchMyPosts();
    }, [])
    
      function newPost (titleString, descriptionString, priceString, locationString, willDeliver)  {
        fetch('https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify({
                post: {
                    title: titleString,
                    description: descriptionString,
                    price: priceString,
                    location: locationString,
                    willDeliver: willDeliver
                }
            })
        }).then(response => response.json())
        .then( result => {
            console.log(result)
            result})
        
    }

        function deletePost (){
            fetch(`https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }).then(response => response.json())
        .then( result => {
            console.log(result)
            result})
        }
        console.log(willDeliver)
    console.log(myPostTitle)

        function handleChange(){
            if (document.getElementById("willdeliverselection").checked){
                setWillDeliver(true)
            } else {
                setWillDeliver(false)
            }
        }

    return (<>
        <div className="allmyposts">
            
            <div className="myposts">
                <h1>POSTLIST</h1>
                {myPosts.map( post => <div key={post._id}>
                       <div className='title'> Title: {post.title} </div>
                       <div className='description'> Description: {post.description}  </div>
                       <div className='description'> Price: {post.price}  </div>
                       <div className='location'> Location: {post.location}</div>
                       <div className='location'> Will Deliver? : {post.willDeliver}</div>
                       <button onClick={function (){setWantsToEdit(true), console.log(post._id),setMyPostTitle(post.title), setPostId(post._id)}}>Edit</button> 
                       <button onClick={function () {setPostId(post._id), deletePost() }}>Delete</button>
                        </div>)}
                        
            </div>

            {wantsToEdit ? <Editpostform myPostTitle={myPostTitle} wantsToEdit={wantsToEdit} setWantsToEdit={setWantsToEdit} postId={postId}/> : null}

            <div className="newpost">
               <h1>CREATE NEW POST</h1>
                <label className="newtitle">Title</label>
                <input className="titleinput" type="text" value={titleString} onChange={event => {setTitleString(event.target.value)}}></input>
                <label className="newdescription">Description</label>
                <input className="descriptioninput" type="text" value= {descriptionString} onChange={event => {setDescriptionString(event.target.value)}}></input>
                <label className="newprice">Price</label>
                <input className="priceinput" type="text" value={priceString} onChange={event => {setPriceString(event.target.value)}}></input>
                <label className="newlocation">Location</label>
                <input className="locationinput" type="text" value={locationString} onChange={event => {setLocationString(event.target.value)}}></input>
                <label className="newwilldeliver">Will Deliver :</label>
                
                <input id="willdeliverselection" type="checkbox" onChange={function (event) { setWillDeliver(true)}}></input>
                <label className="newwilldeliver">Will Not Deliver :</label>
                <input id="willdeliverselection" type="checkbox" onChange={function (event) { setWillDeliver(false)}}></input>
                {/* <select>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>   */}

                <button onClick={function () {newPost(titleString, descriptionString, priceString, locationString, willDeliver)}}>Create Post</button>

            </div>

            
        </div>
    </>)
}

export default Userposts