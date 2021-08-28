import React, { useState, useEffect } from "react"
import Newmessageform from './newmessageform.js'

const Messages = ({userToken}) => {

    // const userToken = localStorage.getItem("token")
    const [messages, setMessages] = useState([])
    const [clickedMessage, renderMessageForm] = useState(false)
    const [postId, setPostId] = useState('')
    const [recipientUsername, setRecipientUsername] = useState('')
    const [recipientTitle, setRecipientTitle] = useState('')
    const [username, setUsername] = useState('')

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
                    const messages = result.data.messages
                    setMessages(messages)
                })
        }
        fetchMessages();
    }, [])

    return <>
        <div className="sendandreceived">

            <div className="received">
                <h1 className="mssgetext">Messages</h1>
                {messages.map((message, index) => {
                    return <>

                        <div className="message" key={index}>
                            <div className="mssgusername">From: {message.fromUser.username}</div>
                            <div className='mssgtitle'> Title:{message.post.title} </div>
                            <div className='mssgdescription'> Body: {message.content} </div>
                            {message.fromUser.username === username ? null :
                                <button className="mssgreply" disabled={clickedMessage} onClick={() => {
                                    setPostId(message.post._id)
                                    console.log(postId)

                                    setRecipientUsername(message.fromUser.username)
                                    setRecipientTitle(message.post.title)
                                    console.log(recipientUsername)
                                    console.log(message.fromUser.username)
                                    renderMessageForm(true)
                                }}>Reply</button>}

                        </div>
                    </>
                })}
            </div>
            <div className="newmessageformshow">
                {clickedMessage ? <Newmessageform recipientUsername={recipientUsername} recipientTitle={recipientTitle} postId={postId} setPostId={setPostId} clickedMessage={clickedMessage} renderMessageForm={renderMessageForm} /> : null}
            </div>
        </div> </>
}

export default Messages
