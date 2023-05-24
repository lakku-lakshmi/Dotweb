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
    const [captchaRes,setCaptchaRes]=React.useState(null)
    const [userLogData,setUserLogData]=React.useState({})
      console.log("initial----------",userdetails)
    //   const changeHandler = (e) => {
    //         setUserdetails({ ...userdetails,[e.target.name]: e.target.value });
    //       }
    function onChange(e){
            e.preventDefault();
            const fieldname=e.target.getAttribute("name");
            const fieldvalue=e.target.value;
            const newData={...userLogData};
            newData[fieldname]=fieldvalue;
            setUserLogData(newData);
            console.log("====userLogData====",userLogData)
            } 
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
      
        await axios.post("http://localhost:2000/post",{token})
        .then((res) =>  {
            console.log("////////////////////",res.data)
            setCaptchaRes(res.data.data.success)
            console.log("......",captchaRes)
        })
        .catch((error) => {
        console.log(error);
        })
        await axios.post("http://localhost:2000/login-data",userLogData)
                        .then((res)=>{
                            console.log("response",res.data)
                            if(res.data.data!=null && captchaRes!=null){
                                setCaptchaRes(null)
                            navigate("fetchDetails")
                            }
                        }
                        )
    }
    return (
         <div className="main2-container">
        <div className="login2-container"> 
             <div className="container">
                <div className="login-head">
                Login
                </div>
                <div className="captch-container">
                <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
                />
                </div>
            <div class="inputs">
               <TextField
                    id="email" 
                    label="email" 
                    variant="outlined"
                    name="email"
                    // value={userdetails.username}
                    onChange={onChange}
                />
            </div>
            <div class="inputs">
                <TextField
                    id="password" 
                    label="Password" 
                    name="password"
                    variant="outlined"
                    onChange={onChange}
                />
            </div>
            <div className="forgot_pass">
              <a href="#">Forgot password</a>
            </div>
             {
                
            }       
            <Link to="/fetchDetails">{<Button
                title="login"
                onClickHandler={handleSubmit}
            />}
            </Link>
            <h4>or signup using</h4>
            <div className="icons-conatiner">
            <div className="icons">
                < FacebookIcon
                   color="primary"
                />
                </div>
                <div className="icons">
                <GoogleIcon
                    color="primary"
                />
                </div>
                <div className="icons">
                <TwitterIcon
                   color="primary"
                />
                </div>
            </div>
            </div>      
        </div> 
        </div>
        

    );
};
// export default Signup;