import { useState, useEffect } from "react"

const Messages = () => {
    const [messages, setMessages] = useState([])
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
                     {messages.map( message => <div key={'something'}>
                       <div className='title'> From: </div>
                       <div className='location'> Time: </div>
                       <div className='description'> Body:  </div>
                       <button></button> 
                        </div>)}
                     </div>
        
                     <div className="newmessage">
                        CREATE NEW MESSAGE
                         <input></input>
                         <input></input>
                         <input></input>
                         <input></input>
                         <button></button>
                     </div>
        
                    
                 </div>
        </>
  
}

export default Messages