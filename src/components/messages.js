import { useState, useEffect } from "react"

const Messages = () => {
    const [messages, setMessages] = useState([])
    const [recipientID, setRecipientID] = useState('')
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

    function sendMessage(recipientID){
        fetch (`https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/posts/${recipientID}/messages`,{
            method: "POST",
            headers: {
                'Content-Type': application/json,
                'Authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify({
                message: { 
                    'content': GETCONTENTHERE
                }
            })
        }).then(result => {
            console.log(result)
        }).catch(console.error)
    }

    
    return <> 
             <div className="sendandreceived">
            
                     <div className="received">
                     {messages.map( message => <div key={'something'}>
                       <div className='title'> From: </div>
                       <div className='location'> Time: </div>
                       <div className='description'> Body:  </div>
                       <button onClick={()=> {
                           setRecipientID(message.author._id)
                           sendMessage(recipientID)
                       }}>Reply</button> 
                        </div>)}
                     </div>
        
                     <div className="newmessage">
                        CREATE NEW MESSAGE
                         <input></input>
                        
                         <button>Send</button>
                     </div>
        
                    
                 </div>
        </>
  
}

export default Messages