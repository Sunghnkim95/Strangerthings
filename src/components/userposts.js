import React, { useState, useEffect } from 'react'

import Editpostform from './editpostform.js'

const Userposts = ({userToken}) => {
    const [myPosts, setMyPosts] = useState([])
    // const userToken = localStorage.getItem("token")
    const [titleString, setTitleString] = useState('')
    const [descriptionString, setDescriptionString] = useState('')
    const [priceString, setPriceString] = useState('')
    const [locationString, setLocationString] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    const [wantsToEdit, setWantsToEdit] = useState(false)
    const [myPostTitle, setMyPostTitle] = useState('')
    const [postId, setPostId] = useState('')
    const toggleChecked = () => setWillDeliver(value => !value)

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
        }
        fetchMyPosts();
    }, [])

    function newPost(titleString, descriptionString, priceString, locationString, willDeliver) {
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
            .then(result => {
                console.log(result)
                result
            })

    }

    function deletePost() {
        fetch(`https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                result
            })
    }

    return (<>
        <div className="allmyposts">

            <div className="myposts">
                <h1>POSTLIST</h1>
                {myPosts.map(post => <div key={post._id}>
                    <div className='usertitle'> Title: {post.title} </div>
                    <div className='userdescription'> Description: {post.description}  </div>
                    <div className='userprice'> Price: {post.price}  </div>
                    <div className='userlocation'> Location: {post.location}</div>
                    <button className="usereditbtn" onClick={function () { setWantsToEdit(true), console.log(post._id), setMyPostTitle(post.title), setPostId(post._id) }}>Edit</button>
                    <button className="userdeletebtn" onClick={function () { setPostId(post._id), deletePost() }}>Delete</button>
                </div>)}

            </div>

            {wantsToEdit ? <Editpostform myPostTitle={myPostTitle} wantsToEdit={wantsToEdit} setWantsToEdit={setWantsToEdit} postId={postId} /> : null}

            <div className="newpost">
                <h1 className="creatnewposttext">CREATE NEW POST</h1>
                <label className="newtitle">Title</label>
                <input className="titleinput" type="text" value={titleString} onChange={event => { setTitleString(event.target.value) }}></input>
                <label className="newdescription">Description</label>
                <input className="descriptioninput" type="text" value={descriptionString} onChange={event => { setDescriptionString(event.target.value) }}></input>
                <label className="newprice">Price</label>
                <input className="priceinput" type="text" value={priceString} onChange={event => { setPriceString(event.target.value) }}></input>
                <label className="newlocation">Location</label>
                <input className="locationinput" type="text" value={locationString} onChange={event => { setLocationString(event.target.value) }}></input>
                <label className="newwilldeliver">Will Deliver :</label>

                <input id="willdeliverselection" type="checkbox" onChange={function (event) { setWillDeliver(true) }}></input>


                <button className="createbtn" onClick={function () { newPost(titleString, descriptionString, priceString, locationString, willDeliver) }}>Create Post</button>

            </div>


        </div>
    </>)
}

export default Userposts