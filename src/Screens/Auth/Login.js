import TextField from "@mui/material/TextField";
import '../../style/Login1.css';
import {Button} from "../../components/Button"
import { useLocation, useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import axios from 'axios';
export const Login=()=>{
    let navigate=useNavigate();
    //handles token
    const [userInfo, setUserInfo] = React.useState([]
    );
    //handles details of user we get after making api request
    const [profileInfo, setProfileInfo] = React.useState({});

    const [userLogData,setUserLogData]=React.useState({
        // password:"",
        // username:""
    });
    const GoogleLogin = useGoogleLogin({
        onSuccess:(response)=>{console.log("========",{response});
         setUserInfo(response);
         
    },
        onError: (error) => console.log(`Login Failed: ${error}`, )
    });
    const logOut = () => {
        googleLogout();
        setProfileInfo(null);
    };
    const normalLogin=()=>{
        console.log("----------",userLogData)
        if(userLogData){
            let email;
            axios.post("http://localhost:2000/login-data",{email,userLogData})
            .then((res)=>{

                console.log("response",res.data)
                if(res.data.data!=null){
                    console.log("-------------llllllllllllllll")
                navigate("logged-user",{
                    state:{
                         "name": res.data.data.username,
                        "email":res.data.data.email,
                    }
                }
            
            )
                }
            }
            )
        }
        
    }
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
                        console.log("---------1",userLogData)
                        setUserLogData({})
                        console.log("---------2",userLogData)
                        axios.post("http://localhost:2000/login-data",response.data,userLogData)
                        .then((res)=>{

                            console.log("response",res.data)
                            if(res.data.data!=null){
                                console.log("-------------llllllllllllllll")
                            navigate("logged-user",{
                                state:{
                                     "name": res.data.data.username,
                                    "email":res.data.data.email,
                                }
                            }
                        )
                            }
                        }
                    )
                    
                })
                    .catch((error) => console.log(error));
            }
        },
        [ userInfo ]
    );
    function onChange(e){
    e.preventDefault();
    const fieldname=e.target.getAttribute("name");
    const fieldvalue=e.target.value;
    const newData={...userLogData};
    newData[fieldname]=fieldvalue;
    setUserLogData(newData);
    console.log("========",userLogData)
    } 
    return (
        <div className="main-login-containe">
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
         <div className="login1-container">  
         <div className="container">
        <div className="gconnect">
            <h4>----------------------------Easily using-----------------------</h4>
            <div>
                    <Button 
                    title="Sign in with Google"
                    onClickHandler={GoogleLogin}
                     />
</div>
            <h4>-------------------------or using Account details-----------------</h4>
        </div>
        <div className="inputs">
            <TextField 
                    id="username" 
                    label="Username" 
                    name="username"
                    variant="filled"
                    value={userLogData.username}
                    onChange={onChange}
                />
            </div>

            <div className="inputs">
            <TextField 
                    id="password" 
                    label="password" 
                    name="password"
                    variant="filled"
                    value={userLogData.password}
                    onChange={onChange}
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
               onClickHandler={normalLogin}
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
