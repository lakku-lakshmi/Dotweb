import TextField from "@mui/material/TextField";
import '../../style/Login2.css';
import {Button} from "../../components/Button"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Login2=()=>{
    return (
        <div className="main-container">
        <div className="login-container"> 
            <div className="container">
                <h1>Login</h1>
            <div class="inputs">
               <TextField
                    id="username" 
                    label="username" 
                    variant="outlined"
                />
            </div>
            <div class="inputs">
                <TextField
                    id="password" 
                    label="Password" 
                    variant="outlined"
                />
            </div>
            <div>
              <a href="#">Forgot password</a>
            </div>
            <Button
                title="login"
            />
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