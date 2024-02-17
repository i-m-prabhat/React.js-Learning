import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () =>
{
    const { user } = useContext(UserContext)

    if (!user) return <>
        <hr />
        <div>Please Login</div>
    </>
    return (
        <>
            <hr />
            <div>Welcome {user.username}</div>
        </>
    )
}

export default Profile