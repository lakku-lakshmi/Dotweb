import React from 'react';
import {Button} from "./Button";
import {useLocation} from 'react-router-dom';

 export const Logged_user=()=>{
    const {state} = useLocation();
    console.log("========",state)
   return(
    <div>
    {/* <img src={location.state.image} alt="Profile Image" /> */}
    <h3>Currently logged in user<br></br>Name:{state.name}<br></br>Email:{state.email}</h3>
    {/* <p>Name</p>
    <p>Email: {state.email}</p> */}
    <Button
        onClickHandler={state.onClick}
        title="Logout"
    /> 
</div>
   );

}