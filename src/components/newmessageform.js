import React from 'react'
import { useState, useEffect } from 'react'

const Newmessageform = () => {
    const [newMessageForm, renderNewMessageForm] = useState(false)

    function sendMessage(postId, content){
        fetch (`https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/posts/${postId}/messages`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken
        },
        body: JSON.stringify({
            message: { 
                'content': content
            }
        })
    }).then(result => {
        console.log(result)
    }).catch(console.error)
}

if(newMessageForm){

    return <>
        <div className="newmessageform">
            <input>Hello</input>
        </div>
     </>
}

    return <>Click a message to Reply</>

}


export default Newmessageform