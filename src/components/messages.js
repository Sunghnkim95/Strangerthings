import { useState, useEffect } from "react"

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

const Newmessageform = () => {
    return <> 
      <div className="messagetitle">Message Content</div>
        <input className="messagebody" onchange={function (event){
            setContent(event.target.value)
        }}></input>     
        <button onClick={
            sendMessage(postId, content)
        } disabled={content===null}>Send</button>     </>
}



const Messages = () => {
    const [messages, setMessages] = useState([])
    const [postId, setPostId] = useState('')
    const userToken = localStorage.getItem("token")
    useEffect(() => {
        const fetchMessages = async () => {
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/users/me', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            })
            const data = await resp.json()
            const messages = data.data.messages
            setMessages(messages)
            console.log(messages)
        }
        fetchMessages();
    }, [])


    
    return <> 
             <div className="sendandreceived">
            
                     <div className="received">
                     {messages.map( message => <div key={message._id}>
                       <div className='username'> From:{message.fromUser.username} </div>
                       <div className='title'> Title:{message.post.title} </div>
                       <div className='description'> Body: {message.content} </div>
                       <button onClick={()=> {
                           setPostId(message._id)
                       }}>Reply</button> 
                        </div>)}
                     </div>
            <div className="nesmessageform">
            <Newmessageform />
            </div>
                     {/* <div className="newmessage">
                        REPLY MESSAGE
                        <input className="messageinput"
                            type="text"
                            value = {content}
                            onChange={function(event){
                                setContent(event.target.value);
                            }}>
                            </input> */}
                        
                         
                     {/* </div> */}
        
                    
                 </div>
        </>
  
}

export default Messages