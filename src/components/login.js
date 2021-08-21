import React, { useState } from 'react';


const Login = ({setIsLoggedIn, isLoggedIn, setUserToken, userToken}) => {
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');

    function loginUser (username, password) {

        fetch(`https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': bearer
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }).then(response => response.json())
        .then(result => {
            

            if(result.success){
                setIsLoggedIn(true)
                console.log("token", result.data.token)
                setUserToken(result.data.token)
                localStorage.setItem("token", result.data.token)
            }
            return result
        })
        .catch(console.error)
    };

    function logoutUser () {
        setIsLoggedIn(false)
        setUserToken('')
    }

    return (
        <>
        <div className='Login'>
            <h1>Login</h1>

            <input className="usernameValue"
            type="username"
            value = {usernameString}
            onChange={function(event){
                setUsernameString(event.target.value);
            }}>
            </input>

            <input className="passwordValue"
            type="password"
            value={passwordString}
            onChange={function(event){
                setPasswordString(event.target.value);
            }}>
            </input>
            
            { isLoggedIn ? <button onClick={()=> {
                logoutUser()
            }}
            >Logout</button>  :  <button onClick={()=> {
                loginUser(usernameString, passwordString)
            }}
            >Login</button> }
        

        </div>
        </>
    )}


export default Login;