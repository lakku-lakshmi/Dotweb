import TextField from "@mui/material/TextField";
import '../../style/Login1.css';
// import GoogleIcon from '@mui/icons-material/Google';
import {Button} from "../../components/Button"
// import { GoogleLogin } from '@react-oauth/google';
import { useLocation, useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import axios from 'axios';
// import {Logged_user} from "../../components/Logged_user";
export const Login=()=>{
    let navigate=useNavigate();
    //handles token
    const [userInfo, setUserInfo] = React.useState([]
    );
    //handles details of user we get after making api request
    const [profileInfo, setProfileInfo] = React.useState({});
    const login = useGoogleLogin({
        onSuccess:(response)=>{console.log("========",{response});
         setUserInfo(response);
         
    },
        onError: (error) => console.log(`Login Failed: ${error}`, )
    });
    const logOut = () => {
        console.log("outttttt");
        googleLogout();
        setProfileInfo(null);
    };
    React.useEffect(
        () => {
            if (userInfo) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userInfo.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${userInfo.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((response) => {
                        console.log("------response.data",response.data);
                        setProfileInfo(response.data);
                        console.log("......profileinfo",response.data.email)
                        navigate("logged-user",{
                            state:{
                                 "name": response.data.name,
                                "email":response.data.email,
                                // onClick:{logOut}
                            }
                        }
                    )
                    
                })
                    .catch((error) => console.log(error));
            }
        },
        [ userInfo ]
    );
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
            <h4>----------------------------Easily using-----------------------</h4>
            <div>
                {/* { profileInfo ? (
                    navigate("logged-user",{
                        state:{
                            // name: userInfo.name,
                            // email:userInfo.email,
                            // // image:userInfo.picture,
                            // onClick:{logOut}
                            profileInfo
                        }
                    })
            // <Logged_user
            // name={userInfo.name}
            // email={userInfo.email}
            // onClick={logOut}
            // image={userInfo.picture}
            // />
                )
                :( */}
                    <Button 
                    title="Sign in with Google"
                    onClickHandler={login}
                     />
        {/* )
                } */}
            </div>
            <h4>-------------------------or using Account details-----------------</h4>
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
            <div>
      <Button
               title="Login"
            />
            </div>
            <h5>-------New to Rental App?-------</h5>
            <Button
               title="Register"
            />
        </div>
        </div>
        </div>
    );
};
