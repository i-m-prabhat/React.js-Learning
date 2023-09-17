import React, { useState, useContext } from 'react'
import UserContext from '../context/userContext'

const Login = () =>
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)
    const handlesubmit = (e) =>
    {
        e.preventDefault();
        setUser({ username, password });
    }
    return (
        <div>
            <h2>Login</h2>
            <p>
                <input
                    type="text"
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        padding: "8px"
                    }}
                />
            </p>
            <p>
                <input
                    type="text"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        padding: "8px"
                    }}
                />
            </p>
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Login