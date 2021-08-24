import React, { useState, useEffect } from "react"
import Newmessageform from './newmessageform.js'



const Messages = () => {

    const userToken = localStorage.getItem("token")
    const [messages, setMessages] = useState([])
    const [clickedMessage, renderMessageForm] = useState(false)
    const [postId, setPostId] = useState('')
    const [recipientUsername, setRecipientUsername] = useState('')
    const [recipientTitle, setRecipientTitle] = useState('')

    
  
    

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
            console.log('data',data)
            console.log('messages',messages)
            setMessages(messages)
            
            
        }
        fetchMessages();
    }, [])



    // function sendMessage(postId, content){
    //         fetch (`https://strangers-things.herokuapp.com/api/2105-VPI-WEB-PT/posts/${postId}/messages`,{
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + userToken
    //         },
    //         body: JSON.stringify({
    //             message: { 
    //                 'content': content
    //             }
    //         })
    //     }).then(result => {
    //         console.log(result)
    //     }).catch(console.error)
    // }
//IF message.fromUser._id === currentUserID : null
    
        return <>
            <div className="sendandreceived">
                <div className="received">
                    {messages.map((message)=> {
                            return <> 
                                        <div className="message">
                                            <div className="username">From: {message.fromUser.username}</div>
                                            <div className='title'> Title:{message.post.title} </div>
                                            <div className='description'> Body: {message.content} </div>
                                            <button disabled={clickedMessage} onClick ={()=> {
                                                setPostId(message.post._id)
                                                setRecipientUsername(message.fromUser.username)
                                                setRecipientTitle(message.post.title)
                                                console.log(postId)
                                                renderMessageForm(true)
                                            }}>Reply</button>
                                            
                                        </div>
                                    </>
                        

                    })}
                </div>
                <div className="newmessageform">
                       {clickedMessage ? <Newmessageform recipientUsername= {recipientUsername} recipientTitle={recipientTitle} postId={postId} setPostId={setPostId} clickedMessage={clickedMessage} renderMessageForm={renderMessageForm}  /> : null}  
                 </div>
            </div> </>



    //    return <> 
    //          <div className="sendandreceived">
    //                  <div className="received">
    //                      {messages.map( (message, index) => { 
    //                                                   return(  <> <div className="message" key={index} >
    //                                                              <div className='username'> From:{message.fromUser.username} </div> 
    //                                                               <div className='title'> Title:{message.post.title} </div> 
    //                                                              <div className='description'> Body: {message.content} </div>
    //                                                              <button onClick ={()=> {
    //                                                                 setPostId(message.post._id)
    //                                                                 setRecipientUsername(message.fromUser.username)
    //                                                                 setRecipientTitle(message.post.title)
    //                                                                 console.log(postId)
    //                                                                 renderMessageForm(true)
    //                                                             }}>Reply</button>
                                                            
    //                                                         </div></>)}
    //                                                                     )
    //                                                                      } 
                                                                         
    //                 </div>
                
    //             <div className="newmessageform">
    //                   {clickedMessage ? <Newmessageform recipientUsername= {recipientUsername} recipientTitle={recipientTitle} postId={postId} setPostId={setPostId} /> : null}  
    //             </div>
      
    //         </div>
    //         </>

        
 
 














    // Return  <> 
    //         <div className="sendandreceived">
            
    //                 <div className="received">
    //                     {messages.map( message => <div key={message._id} >
    //                     <div className='username'> From:{message.fromUser.username} </div>
    //                     <div className='title'> Title:{message.post.title} </div>
    //                     <div className='description'> Body: {message.content} </div>
    //                     <button onClick={()=> {
    //                         setPostId(message._id)
    //                         console.log(postId)
    //                         renderMessageForm(message)
    //                     }}>Reply</button> 
    //                         </div>)}
    //                 </div>
    //             <div className="newmessageform">
    //                     <Newmessageform />
    //             </div>
      
    //         </div>
    //         </> }
            



}

export default Messages



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

      //otherwise, return click this
        // return <> 
        // <div className="sendandreceived">
       
        //         <div className="received">
        //         {messages.map( message => <div key={message._id} >
        //           <div className='username'> From:{message.fromUser.username} </div>
        //           <div className='title'> Title:{message.post.title} </div>
        //           <div className='description'> Body: {message.content} </div>
        //           <button onClick={()=> {
        //            setPostId(message._id)
        //            console.log(postId)
        //            renderNewMessageForm(newMessageForm)
        //           }}>Reply</button> 
        //            </div>)}
        //         </div>
        //         </div>