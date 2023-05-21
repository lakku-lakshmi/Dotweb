import TextField from "@mui/material/TextField";
import '../../style/Login2.css';
import {Button} from "../../components/Button"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha"
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import user from "../../../server/model/user";

export const Login2=()=>{
    const navigate=useNavigate();
    const captchaRef = useRef(null)
    const [userdetails,setUserdetails]=React.useState({
        username: "",
        password: "",
      });
      console.log("initial----------",userdetails)
      const changeHandler = (e) => {
            setUserdetails({ ...userdetails,[e.target.name]: e.target.value });
          }
           
    const handleSubmit = async (e) =>{
        console.log("final,,,,,,,,,,,",userdetails)
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
      
        await axios.post("http://localhost:2000/post",{token})
        .then(res =>  console.log(res.data))
        .catch((error) => {
        console.log(error);
        })
        navigate("fetchDetails")
    }
    return (
        <div className="main-container">
        <div className="login-container"> 
            <div className="container">
                <h1>Login</h1>
                <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
                />
            <div class="inputs">
               <TextField
                    id="username" 
                    label="username" 
                    variant="outlined"
                    // value={userdetails.username}
                    onChange={changeHandler}
                />
            </div>
            <div class="inputs">
                <TextField
                    id="password" 
                    label="Password" 
                    variant="outlined"
                    // value={userdetails.password}
                    onChange={changeHandler}
                />
            </div>
            <div>
              <a href="#">Forgot password</a>
            </div>
            <Link to="/fetchDetails">{<Button
                title="login"
                onClickHandler={handleSubmit}
            />}
            </Link>
            <div>
                <h4>or signup using</h4>
                < FacebookIcon
                   color="primary"
                />
                <GoogleIcon
                    color="primary"
                />
                <TwitterIcon
                   color="primary"
                />
            </div>
            </div>     
        </div>
        </div>
        

    );
};
// export default Signup;