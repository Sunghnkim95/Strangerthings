import { useState } from "react"
import React from 'react'

const Editpostform = ({ myPostTitle, setWantsToEdit, wantsToEdit, postId }) => {

    const userToken = localStorage.getItem("token")
    const [titleString, setTitleString] = useState('')
    const [descriptionString, setDescriptionString] = useState('')
    const [priceString, setPriceString] = useState('')
    const [locationString, setLocationString] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    console.log(postId)

    function editPost(titleString, descriptionString, priceString, locationString, willDeliver) {
        fetch(`https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/posts/${postId}`, {
            method: 'PATCH',
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
                    willDeliver: willDeliver,
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                result
            })
    }
    function cancelEdit() {
        setWantsToEdit(false)
    }

    return <>
        <div className="editpostform">
            <h1 className="editposttext">Edit Your Post: {myPostTitle}</h1>
            <label className="editnewtitle">Title: </label>
            <input className="edittitleinput" type="text" value={titleString} onChange={event => { setTitleString(event.target.value) }}></input>
            <label className="editnewdescription">Description: </label>
            <input className="editdescriptioninput" type="text" value={descriptionString} onChange={event => { setDescriptionString(event.target.value) }}></input>
            <label className="editnewprice">Price: </label>
            <input className="editpriceinput" type="text" value={priceString} onChange={event => { setPriceString(event.target.value) }}></input>
            <label className="editnewlocation">Location: </label>
            <input className="editlocationinput" type="text" value={locationString} onChange={event => { setLocationString(event.target.value) }}></input>
            <label className="editnewwilldeliver">Will Deliver? :</label>
            <input className="editwilldeliverselection" type="checkbox" value={willDeliver} onChange={event => setWillDeliver(true)}></input>
            <button className="editbtn" onClick={function () { editPost(titleString, descriptionString, priceString, locationString, willDeliver) }}>Edit Post</button>
            <button className="canceleditbtn" onClick={cancelEdit}>Cancel</button>
        </div>
    </>


}

export default Editpostform