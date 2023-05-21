import React,{useState} from 'react'
import { Visibility,Edit } from '@mui/icons-material'
import { useAsyncValue } from 'react-router-dom';
import {SearchBar} from "../../components/SearchBar";
import axios, * as others from 'axios';
import { Fragment } from 'react';
import {EditableRow} from '../../components/EditableRow'; 
import {ReadOnlyRow} from '../../components/ReadOnlyRow';




 export const TableDetails =() => {
  console.log("tableejsjdfhdjfjdbf")
  const [input,setInput]=useState(null)
  const [editId, setEditId] = useState(false);
  const [data,setData]=useState([
    {username:"lakshmi",email:"lakku@gamil.com",password:"12345"},
    {username:"nmklkjh",email:"ddfs,",password:"hbdjskma"},
    {username:"hjdk",email:"dhjks",password:"fghnb"},
]);
  const [deleteId,setDeleteId]=(null)
  const [editFormData,setEditFormData]=useState({
    username:"",
    email:"",
    password:""
  })
  const handleEdit = async(event,val) => {
    console.log(".......",val)
    event.preventDefault();
    setEditId(val._id)
    const formValues={
      username:val.username,  
      email:val.email,
      password:val.password
    } 
    setEditFormData(formValues);
  };


  const handleCancel=()=>{
    setEditId(null)
  }

  // const handleDelete=(e,val)=>{
  //   setDeleteId(val._id)
  //   axios.delete("http://localhost:2000/editDetails",{deleteId})
  //   .then(res=>{
  //     setData(res.data.data)   
  //     setDeleteId(null)
  //   })
  // }

  const handleEditFormChange=(e,editFormData)=>{
    e.preventDefault();
    const fieldname=e.target.getAttribute("name");
    const fieldvalue=e.target.value;
    const newFormData={...editFormData};
    newFormData[fieldname]=fieldvalue;
    setEditFormData(newFormData);
  }


  const handleEditSubmit=(e,editFormData)=>{
    e.preventDefault();
    const newData={
      username:editFormData.username,
      email:editFormData.email,
      password:editFormData.password
    }
    axios.put("http://localhost:2000/editDetails",{editId,newData})
    .then(res=>{
      setData(res.data.data)   
      setEditId(null)
    })
  }
  React.useEffect(
    ()=>{
             console.log("==============")
             axios.get("http://localhost:2000/fetchDetails")
             .then(res=>{
              console.log(res.data.data)
              setData(res.data.data);
              console.log(data)
             })              
    },[]
  )
//   const updateInput = async (input) => {
//     console.log("onchange.........",input);
//     const filtered = data.filter(user_data => {
//      return user_data.username.toLowerCase().includes(input.toLowerCase())
//     })
//     console.log("++++++",filtered)
//     setData(filtered);
//     if(!input){
//       console.log("==============")
//       axios.get("http://localhost:2000/fetchDetails")
//       .then(res=>{
//        setData(res.data.data);
//       })  
//     }
//  }
//  function onChange(e){
//   console.log(".....coming");
//   updateInput(e.target.value)
//  }
    return (
        <>
      <div className='work-table-container'>
        <SearchBar
         input={input} 
        //  onChange={onChange}
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
            data.map((val) =>  ( 
              <Fragment>
                  {editId === val._id?(
                    <EditableRow
                       editFormData={editFormData}
                       handleEditFormChange={handleEditFormChange}
                       handleEditSubmit={handleEditSubmit}
                       handleCancel={handleCancel}
                    />
                ):(
                  <ReadOnlyRow
                     val={val}
                     handleEdit={handleEdit}
                    //  handleDelete={handleDelete}
                  />
                  // <tr>
                  // <td>{val.username}</td>
                  // </tr>
                )
                  }
                   </Fragment>
                ))}       
          </tbody>      
        </table>
        </div>
        </>
    );
 };
// export default TableDetails;