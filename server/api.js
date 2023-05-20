const router = require("express").Router();
const {FetchDetails,isLoggedin} =require("./controllers/functions");


router.get(
    "/fetchDetails",
    isLoggedin,
    FetchDetails
  );