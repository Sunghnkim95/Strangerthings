import React, { useState } from 'react';


async function registerUser(username, password) {
    
    await fetch('https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/users/register', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user": {
                "username":username,
                "password":password
            }
        })
    }).then(res => res.json())
    .then (result=>{return result})
    
    .catch(console.error)
};






const Register = () => {
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');

    return (
        <>
        <div className='Register'>
            <h1>Register</h1>

            <input className="usernameValue"
            type="text"
            value={usernameString}
            onChange={function(event){
                setUsernameString(event.target.value);
                console.log("username", usernameString)

            }}>
            </input>

            <input className="passwordValue"
            type="text"
            value={passwordString}
            onChange={function(event){
                setPasswordString(event.target.value);
            }}>
            </input>

            <button onClick={()=> registerUser(usernameString, passwordString)}
            >Register</button>
        </div>
        </>
    )
}

    // async function registerUser(username, password) {
    
    //     await fetch('https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/users/register', {
    //         method: 'POST',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             user: {
    //                 "username":username,
    //                 "password":password
    //             }
    //         })
    //     }).then(res => res.json())
    //     .then(result=>console.log(result)
    //     )
    //     .catch(console.error)
    // };






export default Register;
