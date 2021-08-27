import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';


const Login = ({setIsLoggedIn, isLoggedIn, userToken, setUserToken}) => {
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');

    function loginUser (username, password) {

        fetch(`https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }).then(response => response.json())
        .then(result => {
            

        
                console.log(result)
                setIsLoggedIn(true)
                console.log("token", result.data.token)
                setUserToken(result.data.token)
                console.log(userToken)
                localStorage.setItem("token", result.data.token)
            
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
            
            {/* { isLoggedIn ? <button onClick={()=> {
                logoutUser()
            }}
            >Logout</button>  : */}
              <button onClick={()=> {
                loginUser(usernameString, passwordString)
            }
            }
            >Login</button> <br></br><br></br>
           
        

        </div>
        </>
    )}


export default Login;