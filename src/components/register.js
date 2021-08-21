import React, { useState } from 'react';


async function registerUser(username, password) {
    
    await fetch('https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password,
            },
        }),
    })
   .then(response => response.json())
   .then (result => {
       console.log(result)
       return result
   })
   .catch (console.error)
    
};

const Register = () => {
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');
    
    return (
        
        <div className='Register'>
            
            <h1>Register</h1>

            <input className="usernameValue"
            type="username"
            value={usernameString}
            onChange={(event)  => {
                setUsernameString(event.target.value);
                console.log("username", usernameString)

            }}>
            </input>

            <input className="passwordValue"
            type="password"
            value={passwordString}
            onChange={(event) => {
                setPasswordString(event.target.value);
                console.log("password", passwordString)
            }}>
            </input>

            <button onClick={
                () => registerUser(usernameString, passwordString)
            }
            >Register</button>
            
        </div>
    )
}

export default Register;
