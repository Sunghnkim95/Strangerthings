import React, { useState } from 'react';


const Login = () => {
    const [usernameString, setUsernameString] = useState('');
    const [passwordString, setPasswordString] = useState('');

    return (
        <>
        <div className='Login'>
            <h1>Login</h1>

            <input className="usernameValue"
            type="text"
            onChange={function(event){
                setUsernameString(event.target.value);
            }}>
            </input>

            <input className="passwordValue"
            type="text"
            onChange={function(event){
                setPasswordString(event.target.value);
            }}>
            </input>

            <button onClick={()=>{loginUser(usernameString, passwordString)}}
            >Login</button>
        </div>
        </>
    )}

async function loginUser(name, pw) {

    await fetch(`https://strangers-things.herokuapp.com/api/2105-vpi-web-pt/users/login`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
            // 'Authorization': bearer
        },
        body: JSON.stringify({
            user: {
                username:{name},
                password:{pw}
            }
        })
    }).then(res => {res.json()
    // const token = res.token

    console.log(res)}

    ).then(result=>console.log(result)
)
    .catch(console.error)
};


export default Login;