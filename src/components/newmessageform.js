import React from 'react'
import { useState, useEffect } from 'react'

const Newmessageform = (props) => {
    const [messageContent, setContent] = useState('')
    const { clickedMessage, renderMessageForm, recipientUsername, recipientTitle, postId } = props
    const userToken = localStorage.getItem("token")

    function sendMessage() {
        fetch(`https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/posts/${postId}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify({
                'message': {
                    'content': messageContent
                }
            })
        }).then(result => {
            console.log(result)
        }).catch(console.error)
    }

    function cancelMessage() {
        renderMessageForm(false)
    }

    return <>

        <div className="newmessageform">
            <span>To: {recipientUsername}  </span>
            <br></br>
            <span>In Response to post: {recipientTitle} </span>
            <br></br>
            <br></br>
            <span>Message Body:</span>
            <br></br>
            <input onChange={function (event) {
                setContent(event.target.value)
                console.log(messageContent)
            }}></input>
            <button className="send" onClick={function () {
                sendMessage()
                renderMessageForm(false)
            }}>Send</button>
            <button onClick={() => {
                cancelMessage()
            }}>Cancel</button>
        </div>
    </>



}


export default Newmessageform