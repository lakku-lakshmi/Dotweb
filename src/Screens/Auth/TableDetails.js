import React,{useState} from 'react'
import { Visibility,Edit } from '@mui/icons-material'
import { useAsyncValue } from 'react-router-dom';
import {SearchBar} from "../../components/SearchBar";
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
  
  const [input,setInput]=useState('')
  const [edit, setEdit] = useState(false);
  const [data,setData]=useState([]);
  const handleEdit = async() => {
    setEdit(!edit);
  };
  React.useEffect(
    ()=>{
             axios.get("http://localhost:2000/fetchDetails")
             .then(res=>{
              setData(res.data.data);
             })              
    },[]
  )
  const updateInput = async (input) => {
    console.log("onchange.........",input);
    const filtered = data.filter(user_data => {
     return user_data.username.toLowerCase().includes(input.toLowerCase())
    })
    console.log("++++++",filtered)
    setData(filtered);
    if(!input){
      console.log("==============")
      axios.get("http://localhost:2000/fetchDetails")
      .then(res=>{
       setData(res.data.data);
      })  
    }
 }
 function onChange(e){
  console.log(".....coming");
  updateInput(e.target.value)
 }
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
        <SearchBar
         input={input} 
         onChange={onChange}
         placeholder="search username"
        />
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
                   onClick={handleEdit} 
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