import { pink } from "@mui/material/colors";
import { height } from "@mui/system";
import React from "react";

export const Button=({title,onClickHandler})=>{
    return (
        <button
          style={{
            backgroundColor:"skyblue",
            height:"50px",
            width:"400px",
            color:"white"        
          }
        }
        onClick={onClickHandler}
        >
        {title}
        </button>
    );
}