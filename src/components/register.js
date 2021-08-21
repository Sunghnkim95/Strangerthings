import React, { useEffect, useState } from 'react';


const Register = ({setIsLoggedIn, setUserToken}) => {
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');

     function registerUser(username, password) {
        
             fetch('https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/users/register', {
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
                console.log(result.data.token)
                
    
                if(result.success){
                    setIsLoggedIn(true)
                    console.log("token", result.data.token)
                    setUserToken(result.data.token)
                    localStorage.setItem("token", result.data.token)
                        }
                
                return result
            })
            .catch (console.error)

    };


    return (
        
        <div className='Register'>
            
            <h1>Register</h1>

            <input className="usernameValue"
            type="username"
            // minLength = "2" 
            // maxLength = "10"
            value={usernameString}
            onChange={(event)  => {
                setUsernameString(event.target.value)
            }}>
            </input>

            <input className="passwordValue"
            type="password"
            // minLength="2" 
            // maxLength="10"
            value={passwordString}
            onChange={(event) => {
                setPasswordString(event.target.value);
            }}>
            </input>

            <button onClick={
                () => {
                    registerUser(usernameString, passwordString)
                    
            }}
            >Register</button>
            
        </div>
    )
}

export default Register;
