import React,{useState} from 'react'
import { Visibility,Edit } from '@mui/icons-material'
import { useAsyncValue } from 'react-router-dom';
import axios, * as others from 'axios';
// import "../Assets/Style/Table.css";
// import '../Assets/Style/EditPopup.css'
// import { CloseRounded } from '@mui/icons-material';
// import TableAlertPopup from './TableAlertPopup';
// import "../Assets/Style/TableForLoginManagement.css"
// import { TableVisibilityPopup } from './TableVisibilityPopup';
// import EditPopup from './EditPopup'




 export const TableDetails =() => {
//   const [Filter,setFilter]=useState(false)
//   const [openPopup,setOpenPopup]=useState(false);
  
  
  const [data,setData]=useState([
    {username:"lakshmi",email:"lakku@gamil.com",password:"12345"},
    {username:"nmklkjh",email:"ddfs,",password:"hbdjskma"},
    {username:"hjdk",email:"dhjks",password:"fghnb"},
  ])

  React.useEffect(
    ()=>{
             axios.get("http://localhost:2000/fetchDetails")
             .then(res=>{
              setData(res.data.data);
             })          
    }
  )
  // const res=await axios.get("http://localhost:2000/fetchDetails");
  // console.log(".....",res.msg);
  // setData([res.data])
//   const fetch=async()=>{
//  await axios.get("http://localhost:2000/fetchDetails")
//  .then(res =>  console.log(res))
//         .catch((error) => {
//         console.log(error);
//         })
//   }
//   const [openAlert,setOpenAlert]=useState(false);
//   const AlertPopup=()=>{
//     setOpenAlert(!openAlert)
//     console.log("hi")
//   }
//   const togglePopup=()=>{
//     setOpenPopup(!openPopup)
//   }

//   const handleFilterPopup=()=>{
//     setFilter(!Filter)  
//   }

    return (
        <>
      <div className='work-table-container'>
        <table style={{position:"relative",marginTop:"0rem"}}>
          <thead>
            <tr>
              <th>Name of user</th>
              <th>email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
           (  
            data.map((val,key) => {   
                return(
  
                <tr key={key}>
                 <td>{val.username}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td style={{display:"flex",marginTop:"0.625rem"}}>
              <Visibility 
             // onClick={handleFilterPopup}  className="status-elements-visibility" 
              />
               
                  <Edit 
                   //onClick={togglePopup} className="status-elements-edit" 
                  />
                  
              </td>
                </tr>
                  
                
               

              )
               
                 }) )
            
        }
          </tbody> 
          
          
        </table>
        </div>
        </>
    );
 };
// export default TableDetails;