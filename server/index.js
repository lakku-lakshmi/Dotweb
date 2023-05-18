const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const axios = require("axios");
// import axios from 'axios';
require("dotenv").config();
const port =2000;

//enabling cors
app.use(cors());

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//POST route

router.post("/post", async (req, res) => {

    ////Destructuring response token and input field value from request body
    const { token, username} = req.body;
    console.log("hiiiiiiiiiiiiiiii",token)
    console.log(".......",process.env.REACT_APP_SECRET_KEY)
    try {
        console.log("hiiiiiiiiiiiiiiii")
      // Sending secret key and response token to Google Recaptcha API for authentication.
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_SECRET_KEY}&response=${token}`
      );
      // console.log(response)
      // Check response status and send back to the client-side
      if (response.data.success) {
        res.send("Human 👨 👩");
      } else {
        res.send("Robot 🤖");
      }
    } catch (error) {
      // Handle any errors that occur during the reCAPTCHA verification process
      console.error(error);
      res.status(500).send("Error verifying reCAPTCHA");
     }
  });
  
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });