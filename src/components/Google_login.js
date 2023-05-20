import react from 'react';

export const Google_login=()=>{
    return (
        <div>
                    <img src={profileInfo.picture} alt="Profile Image" />
                    <h3>Currently logged in user</h3>
                    <p>Name: {profileInfo.name}</p>
                    <p>Email: {profileInfo.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
        </div>
    );
}