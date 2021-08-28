import React, { useState, useEffect } from 'react';
import Featuredmessageform from './featuredmessageform.js'

const Postdetails = (props) => {
    const { featuredResult, setIsLoggedIn, setUserToken, clickedMessage, renderMessageForm } = props
    const [postId, setPostId] = useState('')
    const [recipientUsername, setRecipientUsername] = useState('')
    const [recipientTitle, setRecipientTitle] = useState('')
    const [username, setUsername] = useState('')
    const userToken = localStorage.getItem("token")


    useEffect(() => {
        const fetchMessages = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/users/me', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                }
            })
                .then(response => response.json())
                .then(result => {
                    const username = result.data.username
                    setUsername(username)
                })
        }
        fetchMessages();
    }, [])

    function logoutUser() {
        setIsLoggedIn(false)
        setUserToken('')
        localStorage.removeItem('token')
    }



    if (!featuredResult) {
        return (<><div className="postdetails">
            <h1>Featured Post</h1>
            <span className="clickformore">Click a Post for more info!</span>
            <button className="logOutinFeaturePost" onClick={() => {
                logoutUser()
            }}>LogOut</button>
        </div></>)
    }

    const { title, price, location, description, willDeliver } = featuredResult

    return (<>
        <div className="postdetails">
            <h1>Featured Post</h1>

            <div key="featuredresult">
                <div className='featuredtitle'> Title:{featuredResult.title} </div>
                <div className='featuredprice'>Price: {featuredResult.price}</div>
                <div className='featureddescription'>Description: {featuredResult.description}</div>
                <div className='featuredlocation'>Location: {featuredResult.location}</div>
                <button className="replybtn" disabled={clickedMessage || (featuredResult.author.username ==username)} onClick={
                    function () {
                        renderMessageForm(true)
                        setPostId(featuredResult._id)
                        setRecipientUsername(featuredResult.author.username)
                        setRecipientTitle(featuredResult.title)
                        console.log(recipientUsername)
                        console.log(recipientTitle)
                        
                    }
                }>Reply</button>

                <button className="logOutBtn" onClick={() => {
                    logoutUser()
                }}>LogOut</button>
                {clickedMessage ? <Featuredmessageform clickedMessage={clickedMessage} renderMessageForm={renderMessageForm} postId={postId} recipientUsername={recipientUsername} recipientTitle={recipientTitle} /> : null}
            </div>
        </div>

    </>)

}

export default Postdetails;