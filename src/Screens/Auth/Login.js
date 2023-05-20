import TextField from "@mui/material/TextField";
import '../../style/Signup.css';
import GoogleIcon from '@mui/icons-material/Google';
import {Button} from "../../components/Button"
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import axios from 'axios';
export const Login=()=>{
    
    // const login = useGoogleLogin({
    //     onSuccess: (response) => setUserInfo(response),
    //     onError: (error) => console.log(`Login Failed: ${error}`, )
    // });
    return (
        <div className="main-login-container">
        <div className="about-container">
          <div className="about">
            <h1>RENTAL APP</h1>
            <h2>Welcome to...</h2>
            <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                Ipsum has been the indutsry's standard dummy text ever since the 1500s
            </p>
            </div>
        </div>
        </div>
        <div className="login-container">  
        <div className="container">
        <div className="gconnect">
            <h4>--------Easily using--------</h4>
            <div>
            {/* <GoogleLogin onSuccess={responseOutput} onError={errorOutput}/> */}
            </div>
            <h4>------or using Account details------</h4>
        </div>
        <div className="inputs">
            <TextField 
                    id="username" 
                    label="Username" 
                    variant="filled"
                    // fullWidth="true"
                />
            </div>

            <div className="inputs">
            <TextField 
                    id="password" 
                    label="Password" 
                    variant="filled"
                    // fullWidth="true"
                />
            </div>
            <div>
                <input type="checkbox"/><h6>Remember me</h6>
                
            </div>
            <div>
                <a href="#">Forgot password</a>
            </div>
            <Button
               title="Login"
            />
            <h5>-------New to Rental App?-------</h5>
            <Button
               title="Register"
            />
        </div>
        </div>
        </div>
    );
};
